import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { ProfileProps } from 'types/api'

type Props = {
  landingPageProfiles: ProfileProps
}

const SectionAboutUs = ({ landingPageProfiles }: Props) => (
  <Container>
    <Heading reverseColor>{landingPageProfiles?.sectionProfilesTitle}</Heading>
    <S.Content>
      {landingPageProfiles?.authors.map((item) => (
        <ProfileCard
          key={item.id}
          name={item.authorTitle}
          role={item.authorSubtitle}
          socialLinks={item.authorNetwork}
          description={item.authorContent}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
