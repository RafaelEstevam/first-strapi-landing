import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ landingPagePriceCard }) => {
  return (
    <>
      {landingPagePriceCard?.map((item, index) => (
        <S.Box key={index}>
          <S.Prices>
            <S.FullPrice>{item.priceCardLabel}</S.FullPrice>
            <S.DiscountPrice>{item.priceCardTitle}</S.DiscountPrice>
          </S.Prices>
          <S.BenefitsList>
            {item.priceCardItems.map((subitem) => (
              <S.BenefitsItem key={subitem.id}>
                {subitem.conceptItemTitle}
              </S.BenefitsItem>
            ))}
          </S.BenefitsList>

          <Button
            href={item.priceCardButton.priceCardButtonLink}
            onClick={onClick}
            withPrice
          >
            <p>{item.priceCardButton.priceCardButtonLabel}</p>
            <div>
              <S.ButtonFullPrice>
                {item.priceCardButton.priceCardButtonPrice}
              </S.ButtonFullPrice>
              <S.ButtonDiscountPrice>
                {item.priceCardButton.priceCardButtonPriceHighlight}
              </S.ButtonDiscountPrice>
            </div>
          </Button>
        </S.Box>
      ))}
    </>
  )
}

export default PricingBox
