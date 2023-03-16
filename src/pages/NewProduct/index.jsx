import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus, FiUpload, FiX } from 'react-icons/fi'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '../../services/api'

import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Select } from '../../components/Select'

import {
  Container,
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

const newProductSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  price: z.number(),
  categoryId: z.number({ required_error: 'Categoria é obrigatória' }),
  ingredients: z.string().array(),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, 'Imagem é obrigatória')
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      'Arquivo inválido'
    )
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Imagens de até 5MB apenas.`
    ),
})

export function NewProduct() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredientName, setNewIngredientName] = useState('')
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: '',
      description: '',
      price: undefined,
      categoryId: undefined,
      image: undefined,
      ingredients: [],
    },
  })

  const handleAddIngredient = () => {
    if (ingredients.includes(newIngredientName)) {
      setNewIngredientName('')
      return
    }
    const updatedValue = [newIngredientName, ...ingredients]

    setValue('ingredients', updatedValue)
    setIngredients(updatedValue)
    setNewIngredientName('')
  }

  const handleRemoveIngredient = (name) => {
    setIngredients((state) => state.filter((item) => item !== name))
  }

  const handleCreateProduct = handleSubmit(async (data) => {
    const formData = new FormData()

    formData.append('categoryId', data.categoryId)
    formData.append('description', data.description)
    formData.append('image', data.image[0])
    formData.append('name', data.name)
    formData.append('price', data.price)

    for (const i in data.ingredients) {
      formData.append(`ingredients[${i}]`, data.ingredients[i])
    }

    try {
      await api.post('/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.message) {
        alert(error?.response?.data?.message)
      } else {
        alert('Algo de errado não está certo')
      }
    }
  })

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
        <h2>Adicionar prato</h2>
        <Form onSubmit={handleCreateProduct}>
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
                {ingredients.map((name) => (
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
            <InputWrapper  >
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

          <SubmitButton disabled={false} type="submit">
            Salvar alterações
          </SubmitButton>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  )
}
