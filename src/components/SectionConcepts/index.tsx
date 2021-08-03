import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { ConceptProps } from 'types/api'

type Props = {
  landingPageConcepts: ConceptProps
}

const SectionConcepts = ({ landingPageConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{landingPageConcepts?.sectionConceptsTitle}</Heading>
      <S.List>
        {landingPageConcepts?.conceptItem.map((item) => (
          <S.Item key={item.id}>{item.conceptItemTitle}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
