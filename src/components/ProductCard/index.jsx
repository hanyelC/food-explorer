import { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Counter } from '../Counter'
import { Pencil } from '../Icons/Pencil'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Wrapper } from './styles'

export function ProductCard({ id, img, title, description, price }) {
  const [quantity, setQuantity] = useState(1)
  const [favorite, setFavorite] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  const { user } = useAuth()

  const isAdmin = user?.admin

  const navigate = useNavigate()

  const handleFavorite = () => setFavorite((prevState) => !prevState)

  const handleDecrease = () => setQuantity((prevState) => prevState - 1)

  const handleIncrease = () => setQuantity((prevState) => prevState + 1)

  const handleUpdateProduct = () => navigate(`/admin/edit-product/${id}`)

  const getImage = async () => {
    try {
      const response = await api.get(`/images/${img}`, {
        responseType: 'blob',
      })
      const url = URL.createObjectURL(response.data)

      setImageUrl(url)
    } catch (err) {
      console.log(err)
    }
  }

  const redirectToProductPage = () => navigate(`/product/${id}`)

  useEffect(() => {
    getImage()

    return () => URL.revokeObjectURL(imageUrl)
  }, [])

  return (
    imageUrl && (
      <Container>
        {isAdmin ? (
          <button onClick={handleUpdateProduct}>
            <Pencil />
          </button>
        ) : (
          <button onClick={handleFavorite}>
            <FiHeart className={favorite ? 'favorite' : ''} />
          </button>
        )}

        <Wrapper>
          <img src={imageUrl} onClick={redirectToProductPage} />
          <h3 onClick={redirectToProductPage} tabIndex="0">
            {title} {'>'}
          </h3>
          <p>{description}</p>
          <span>R$ {price.toFixed(2).replace('.', ',')}</span>
          {!isAdmin && (
            <div>
              <Counter
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                quantity={quantity}
              />
              <Button>incluir</Button>
            </div>
          )}
        </Wrapper>
      </Container>
    )
  )
}
