import { FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { CaretLeft } from '../../components/Icons/CaretLeft'

import {
  BackButton,
  Container,
  DeleteButton,
  Form,
  InputBackground,
  InputWrapper,
  SubmitButton,
  Wrapper,
} from './styles'

export function EditProduct() {
  const navigate = useNavigate()

  const handleDeleteProduct = () => console.log('delete product')

  const handleNavigateBack = () => navigate(-1)

  return (
    <Container>
      <Header />
      <Wrapper>
        <BackButton onClick={handleNavigateBack}>
          <CaretLeft /> voltar
        </BackButton>
        <h2>Editar prato</h2>
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
              <InputBackground>
                <input type="text" />
              </InputBackground>
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

          <div>
            <DeleteButton type="button" onClick={handleDeleteProduct}>
              Excluir prato
            </DeleteButton>

            <SubmitButton disabled={true} type="submit">
              Salvar alterações
            </SubmitButton>
          </div>
        </Form>
      </Wrapper>
    </Container>
  )
}
