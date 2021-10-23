import React from 'react';
import { DiReact, DiNodejsSmall, DiMongodb, DiMysql } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { SiAdobexd, SiNuxtDotJs } from 'react-icons/si';
import {CgFigma} from 'react-icons/cg';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  DivFlex,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DivFlex>
          <DiNodejsSmall size='3rem' />
          <DiMongodb size='3rem' />
          <DiMysql size='3rem' />
        </DivFlex>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DivFlex>
          <DiReact size='3rem' />
          <RiVuejsFill size='3rem' />
          <SiNuxtDotJs size='3rem' />
        </DivFlex>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Vue.js, Nuxt.js and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DivFlex>
        <CgFigma size='3rem' />
        </DivFlex>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
