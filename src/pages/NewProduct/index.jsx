import { useState } from 'react'
import { FiPlus, FiUpload, FiX } from 'react-icons/fi'

import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import {
  Container,
  Form,
  Ingredient,
  Ingredients,
  InputBackground,
  InputWrapper,
  NewIngredient,
  SubmitButton,
  Wrapper,
} from './styles'

export function NewProduct() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredientName, setNewIngredientName] = useState('')

  const handleAddIngredient = () => {
    if (ingredients.includes(newIngredientName)) {
      setNewIngredientName('')
      return
    }
    setIngredients((state) => [newIngredientName, ...state])
    setNewIngredientName('')
  }

  const handleRemoveIngredient = (name) => {
    setIngredients((state) => state.filter((item) => item !== name))
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <BackButton />
        <h2>Adicionar prato</h2>
        <Form>
          <div>
            <InputWrapper>
              <label htmlFor="image">Imagem do prato</label>
              <InputBackground>
                <FiUpload size={24} /> Selecione imagem
                <input type="file" id="image" style={{ display: 'none' }} />
              </InputBackground>
            </InputWrapper>
            <InputWrapper htmlFor="">
              <label>Nome</label>
              <InputBackground>
                <input type="text" placeholder={'Ex.: Salada Ceasar'} />
              </InputBackground>
            </InputWrapper>
            <InputWrapper htmlFor="" style={{ maxWidth: '36.4rem' }}>
              <label>Categoria</label>
              <InputBackground>
                <input type="text" />
              </InputBackground>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper htmlFor="">
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
            <InputWrapper htmlFor="" style={{ maxWidth: '25.1rem' }}>
              <label>Preço</label>
              <InputBackground>
                <input type="number" placeholder={'R$ 00,00'} />
              </InputBackground>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper htmlFor="">
              <label>Descrição</label>
              <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </InputWrapper>
          </div>

          <SubmitButton disabled={true} type="submit">
            Salvar alterações
          </SubmitButton>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  )
}
