import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import reviews from './content'
import * as S from './styles'
import { TestimonialProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

type Props = {
  landingPageTestimonials: TestimonialProps
}

const SectionReviews = ({ landingPageTestimonials }: Props) => (
  <Container>
    <Heading reverseColor>
      {landingPageTestimonials?.sectionTestimonialTitle}
    </Heading>

    <S.Content>
      <Slider {...settings}>
        {landingPageTestimonials?.sectionTestimonialsCards.map(
          (item, index) => (
            <ReviewCard
              key={item.id}
              name={item.testimonialCardTitle}
              description={item.testimonialCardContent}
              id={index}
            />
          )
        )}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
