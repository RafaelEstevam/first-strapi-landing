import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { ScheduleProps } from 'types/api'

type Props = {
  landingPageSchedule: ScheduleProps
}

const SectionAgenda = ({ landingPageSchedule }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{landingPageSchedule.sectionScheduleTitle}</Heading>
    <S.Text>
      <p>
        <div
          dangerouslySetInnerHTML={{
            __html: landingPageSchedule.sectionScheduleContent1
          }}
        />
      </p>

      <p>
        <div
          dangerouslySetInnerHTML={{
            __html: landingPageSchedule.sectionScheduleContent2
          }}
        />
      </p>
    </S.Text>
  </Container>
)

export default SectionAgenda
