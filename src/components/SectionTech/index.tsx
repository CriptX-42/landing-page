import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'
import { sectionTechProps } from 'types/api'

const SectionTech = ({ title, techIcons }: sectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
