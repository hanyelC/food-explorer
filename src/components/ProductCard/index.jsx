import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Counter } from '../Counter'
import { Button } from '../Button'

import { Container, Wrapper } from './styles'
import { api } from "../../services/api";
import { useEffect } from "react";

export function ProductCard({ img, title, description, price }) {
  const [quantity, setQuantity] = useState(1)
  const [favorite, setFavorite] = useState(false)
  const [imageUrl, setImageUrl] = useState(null);

  const handleFavorite = () => {
    setFavorite(prevState => !prevState)
  }

  const handleDecrease = () => {
    setQuantity(prevState => prevState - 1)
  }

  const handleIncrease = () => {
    setQuantity(prevState => prevState + 1)
  }

  const getImage = async () => {
    try {
      const response = await api.get(`/images/${img}`, {
        responseType: "blob",
      });
      const url = URL.createObjectURL(response.data);

      setImageUrl(url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImage();

    return () => URL.revokeObjectURL(imageUrl)
  }, []);

  return (
    imageUrl && (
     <Container>
        <button onClick={handleFavorite}>
          <FiHeart className={favorite ? "favorite" : ""} />
        </button>

        <Wrapper>
          <img src={imageUrl} />
          <h3>{title} {'>'} </h3>
          <p>{description}</p>
          <span>R$ {price.toFixed(2).replace('.', ',')}</span>
          <div>
            <Counter
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={quantity}
            />
            <Button>incluir</Button>
          </div>
        </Wrapper>
      </Container>
    )
  )
}
