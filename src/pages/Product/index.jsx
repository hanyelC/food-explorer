import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { BackButton } from '../../components/BackButton'
import { Counter } from '../../components/Counter'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import {
  Actions,
  Container,
  Ingredient,
  Ingredients,
  ProductDetails,
  ProductInfo,
  Wrapper,
} from './styles'

export function Product() {
  const [counter, setCounter] = useState(1)
  const [productData, setProductData] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  const { user } = useAuth()

  const isAdmin = user?.admin

  const formattedTotalPrice = productData?.price
    ? (productData?.price * counter).toFixed(2).replace('.', ',')
    : undefined

  const decreaseCounter = () => {
    setCounter((state) => (state > 1 ? state - 1 : state))
  }

  const increaseCounter = () => {
    setCounter((state) => (state < 99 ? state + 1 : state))
  }

  const handleEditProduct = () => navigate(`/admin/edit-product/${id}`)

  const getProductData = async () => {
    try {
      const { data } = await api.get(`/products/${id}`)

      await getImage(data.image.image_name)

      setProductData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getImage = async (image_name) => {
    try {
      const response = await api.get(`/images/${image_name}`, {
        responseType: 'blob',
      })

      const url = URL.createObjectURL(response.data)

      setImageUrl(url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <Container>
      <Header />
      <Wrapper>
        <BackButton />
        <ProductInfo>
          <img src={imageUrl} alt="" />
          <ProductDetails>
            <div>
              <h1>{productData?.name}</h1>
              <p>{productData?.description}</p>
              <Ingredients>
                {productData?.ingredients?.map((name) => (
                  <Ingredient key={name}>{name}</Ingredient>
                ))}
              </Ingredients>
            </div>
            <Actions>
              {isAdmin ? (
                <button onClick={handleEditProduct}>Editar prato</button>
              ) : (
                <>
                  <Counter
                    handleDecrease={decreaseCounter}
                    handleIncrease={increaseCounter}
                    quantity={counter}
                  />
                  <button>incluir ∙ R$ {formattedTotalPrice}</button>
                </>
              )}
            </Actions>
          </ProductDetails>
        </ProductInfo>
      </Wrapper>
      <Footer />
    </Container>
  )
}
