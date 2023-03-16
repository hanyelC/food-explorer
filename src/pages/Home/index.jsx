import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Banner } from '../../components/Banner'

import { Container } from './styles'

export function Home() {
  const [products, setProducts] = useState([])

  const { signOut } = useAuth()

  const productsByCategory = new Map()

  if (products.length > 0) {
    for (const product of products) {
      const { categories } = product

      for (const { category } of categories) {
        const cat = productsByCategory.get(category.id)
        if (cat === undefined) {
          productsByCategory.set(category.id, {
            category,
            products: [],
          })
        }
        productsByCategory.get(category.id).products.push(product)
      }
    }
  }

  async function getProducts({ search } = { search: undefined }) {
    try {
      const response = await api.get('/products', { params: { q: search }})
      setProducts(response.data)
    } catch (err) {
      console.log(err.response)
      if (err.response.status === 401) {
        signOut()
      }
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Header onSearchChange={(e) => getProducts({ search: e.target.value })} />

      <Banner />
      {products && Array.from(productsByCategory.values()).length > 0 ? (
        Array.from(productsByCategory.values()).map(
          ({ category, products }) => (
            <Section
              key={category.id}
              category={category.description}
              products={products}
            />
          )
        )
      ) : (
        <h1 style={{ flex: 1 }}>Nada por aqui</h1>
      )}

      <Footer />
    </Container>
  )
}
