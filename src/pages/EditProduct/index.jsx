import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiPlus, FiUpload, FiX } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import { AxiosError } from 'axios'

import { api } from '../../services/api'

import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Select } from '../../components/Select'

import {
  Container,
  DeleteButton,
  ErrorSpan,
  Form,
  Ingredient,
  Ingredients,
  InputBackground,
  InputWrapper,
  NewIngredient,
  SubmitButton,
  Wrapper,
} from './styles'

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const updateProductSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  price: z.number(),
  categoryId: z.number({ required_error: 'Categoria é obrigatória' }),
  ingredients: z.string().array(),
  image: z
    .instanceof(FileList)
    .refine(
      (files) =>
        files.length === 0 ||
        (files.length === 1 && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type)),
      'Arquivo inválido'
    )
    .refine(
      (files) =>
        files.length === 0 ||
        (files.length === 1 && files?.[0]?.size <= MAX_FILE_SIZE),
      `Imagens de até 5MB apenas.`
    ),
})

export function EditProduct() {
  const [categories, setCategories] = useState([])
  const [newIngredientName, setNewIngredientName] = useState('')

  const navigate = useNavigate()

  const { product_id } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(updateProductSchema),
    defaultValues: async () => {
      const { data } = await api.get(`/products/${product_id}`)

      const { categories, name, description, price, ingredients } = data

      return {
        name,
        description,
        price,
        categoryId: categories[0].category.id,
        image: undefined,
        ingredients,
      }
    },
  })
  const ingredients = watch('ingredients')

  const handleAddIngredient = () => {
    if (ingredients.includes(newIngredientName)) {
      setNewIngredientName('')
      return
    }
    const updatedValue = [newIngredientName, ...ingredients]

    setValue('ingredients', updatedValue)
    setNewIngredientName('')
  }

  const handleDeleteProduct = async () => {
    try {
      await api.delete(`/products/${product_id}`)
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        if (error?.response?.data?.message) {
          return alert(error?.response?.data?.message)
        }
      }
      alert('Algo de errado não está certo')
    }
  }

  const handleEditProduct = handleSubmit(async (data) => {
    console.log('PUT /products', data)

    const formData = new FormData()

    formData.append('categoryId', data.categoryId)
    formData.append('description', data.description)
    data.image[0] && formData.append('image', data.image[0])
    formData.append('name', data.name)
    formData.append('price', data.price)

    for (const i in data.ingredients) {
      formData.append(`ingredients[${i}]`, data.ingredients[i])
    }

    try {
      await api.put(`/products/${product_id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        if (error?.response?.data?.message) {
          return alert(error?.response?.data?.message)
        }
      }
      alert('Algo de errado não está certo')
    }
  })

  const handleRemoveIngredient = (name) => {
    setValue(
      'ingredients',
      ingredients.filter((item) => item !== name)
    )
  }

  useEffect(() => {
    api.get('/categories').then(({ data }) => {
      const categories = data.categories.map(({ id, description }) => ({
        value: id,
        label: description,
      }))

      setCategories(categories)
    })
  }, [])

  return (
    <Container>
      <Header />
      <Wrapper>
        <BackButton />
        <h2>Editar prato</h2>
        <Form onSubmit={handleEditProduct}>
          <div>
            <InputWrapper>
              <label htmlFor="image">
                {errors.image ? (
                  <ErrorSpan>{errors.image?.message}</ErrorSpan>
                ) : (
                  'Imagem do prato'
                )}
              </label>
              <InputBackground>
                <FiUpload size={24} /> Selecione imagem
                <input
                  type="file"
                  id="image"
                  style={{ display: 'none' }}
                  {...register('image')}
                />
              </InputBackground>
            </InputWrapper>
            <InputWrapper >
              <label>
                {errors.name ? (
                  <ErrorSpan>{errors.name.message}</ErrorSpan>
                ) : (
                  'Nome'
                )}
              </label>
              <InputBackground>
                <input
                  type="text"
                  placeholder={'Ex.: Salada Ceasar'}
                  {...register('name')}
                />
              </InputBackground>
            </InputWrapper>
            <InputWrapper >
              <label>
                {errors.categoryId ? (
                  <ErrorSpan>{errors.categoryId.message}</ErrorSpan>
                ) : (
                  'Categoria'
                )}
              </label>
              <InputBackground>
                <Select
                  placeholder="Selecione uma categoria"
                  onChange={(value) => setValue('categoryId', value)}
                  options={categories}
                />
              </InputBackground>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper >
              <label>Ingredientes</label>
              <Ingredients>
                {ingredients &&
                  ingredients.map((name) => (
                    <Ingredient key={name}>
                      {name}
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(name)}
                      >
                        <FiX />
                      </button>
                    </Ingredient>
                  ))}
                <NewIngredient>
                  <input
                    type="text"
                    placeholder="Adicionar"
                    value={newIngredientName}
                    onChange={(e) => setNewIngredientName(e.target.value)}
                  />
                  <button type="button" onClick={handleAddIngredient}>
                    <FiPlus />
                  </button>
                </NewIngredient>
              </Ingredients>
            </InputWrapper>
            <InputWrapper >
              <label>
                {errors.price ? (
                  <ErrorSpan>Preço é obrigatório</ErrorSpan>
                ) : (
                  'Preço'
                )}
              </label>
              <InputBackground>
                <input
                  type="number"
                  placeholder={'R$ 00,00'}
                  step="any"
                  {...register('price', { valueAsNumber: true })}
                />
              </InputBackground>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper >
              <label>
                {errors.description ? (
                  <ErrorSpan>{errors.description.message}</ErrorSpan>
                ) : (
                  'Descrição'
                )}
              </label>
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                {...register('description')}
              />
            </InputWrapper>
          </div>

          <div>
            <DeleteButton type="button" onClick={handleDeleteProduct}>
              Excluir prato
            </DeleteButton>

            <SubmitButton disabled={!isValid} type="submit">
              Salvar alterações
            </SubmitButton>
          </div>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  )
}
