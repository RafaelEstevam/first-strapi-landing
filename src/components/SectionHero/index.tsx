import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { HeaderProps, ImgProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: ImgProps
  landingPageHeader: HeaderProps
}

const SectionHero = ({ logo, landingPageHeader }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{landingPageHeader.headerTitle}</S.Title>
          <S.Description>{landingPageHeader.headerDescription}</S.Description>
          <S.ButtonWrapper>
            <Button
              href={landingPageHeader.button.buttonUrl}
              onClick={onClick}
              wide
            >
              {landingPageHeader.button.buttonLabel}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(landingPageHeader.headerImg.url)}
          alt={landingPageHeader.headerImg.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
