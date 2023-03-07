import { FiUpload } from 'react-icons/fi'

import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import {
  Container,
  Form,
  InputBackground,
  InputWrapper,
  SubmitButton,
  Wrapper,
} from './styles'

export function NewProduct() {
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

          <SubmitButton disabled={true} type="submit">
            Salvar alterações
          </SubmitButton>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  )
}
