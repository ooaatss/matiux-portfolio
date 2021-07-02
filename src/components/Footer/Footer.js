import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:809-216-0246'>809-216-0246</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:matiuxdev@gmail.com'>
            matiuxdev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/MatiuxDev' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/matiuxdev' target='_blank'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/matiuxdev' target='_blank'>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/mateo-acevedo-b07a72202/'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
