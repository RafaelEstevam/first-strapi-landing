import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { ImgProps } from 'types/api'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  id: string
  profileCardNetworkLinksImg: ImgProps
  profileCardNetworkLinksSelect: string
  profileCardNetworkLinksUrl: string
}

type Props = {
  name: string
  role: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    {/* <S.Image>
      <source
        srcSet={require(`@images/authors/${image}?webp`)}
        type="image/webp"
      />
      <source srcSet={require(`@images/authors/${image}`)} type="image/png" />
      <img
        src={require(`@images/authors/${image}`)}
        loading="lazy"
        alt={name}
      />
    </S.Image> */}
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.profileCardNetworkLinksUrl}>
          <a
            href={item.profileCardNetworkLinksUrl}
            title={item.profileCardNetworkLinksSelect}
          >
            {icons[item.profileCardNetworkLinksSelect]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </S.Description>
  </S.Card>
)

export default ProfileCard
