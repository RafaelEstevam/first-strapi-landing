import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import faq from './content'
import * as S from './styles'
import { FaqProps } from 'types/api'

type Props = {
  landingPageFaq: FaqProps
}

const SectionFaq = ({ landingPageFaq }: Props) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{landingPageFaq?.sectionFaqTitle}</Heading>

        <S.Questions>
          {landingPageFaq?.sectionFaqItems.map((item, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{item.faqItemTitle}</Heading>
              <div dangerouslySetInnerHTML={{ __html: item.faqItemContent }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a href="http://bit.ly/slack-will" target="_blank" rel="noreferrer">
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
