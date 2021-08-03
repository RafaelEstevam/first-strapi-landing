import React from 'react'
import { ImgProps } from 'types/api'
import * as S from './styles'

import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ alternativeText, url }: ImgProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
