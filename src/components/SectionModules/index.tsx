import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { ModuleProps } from 'types/api'

type Props = {
  landingPageModules: ModuleProps
}

const SectionModules = ({ landingPageModules }: Props) => (
  <Container>
    <Heading reverseColor>{landingPageModules?.sectionModuleTitle}</Heading>

    <S.Content>
      {landingPageModules?.sectionModuleCards.map((item, index) => (
        <CardModule
          key={item.id}
          title={item.cardTitle}
          subTitle={item.cardDescription}
        >
          <div dangerouslySetInnerHTML={{ __html: item.cardContent }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
