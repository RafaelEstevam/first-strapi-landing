import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutProps } from 'types/api'

type Props = {
  landingPageAbout: AboutProps
}

const SectionAboutProject = ({ landingPageAbout }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            alt="Tela do ecommerce com uma imagem do CMS por trás"
          />
        </S.Image>
        <div>
          <Heading>{landingPageAbout.sectionAboutTitle}</Heading>
          <S.Text>
            <div
              dangerouslySetInnerHTML={{
                __html: landingPageAbout.sectionAboutContent
              }}
            />
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
