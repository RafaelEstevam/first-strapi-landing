import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { TechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  landingPageTechs: TechProps
}

const SectionTech = ({ landingPageTechs }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{landingPageTechs.sectionTechsTitle}</Heading>
      <S.IconsContainer>
        {landingPageTechs.sectionComponentIcons.map((item) => (
          <S.Icon key={item.id}>
            <S.Icons
              src={getImageUrl(item.iconMedia.url)}
              alt={item.iconMedia.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{item.iconLabel}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
