import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { DiCoda } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  AFlex,
  Span
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <AFlex>
          <DiCoda size='3rem' />
          <Span>MatiuxDev</Span>
        </AFlex>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
