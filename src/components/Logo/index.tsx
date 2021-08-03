import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
