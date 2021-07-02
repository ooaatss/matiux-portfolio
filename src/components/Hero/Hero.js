import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hi, I'm <br/>
       Mateo Acevedo 
     </SectionTitle>
     <SectionText>
     Hi there! I am Mateo! You might also know me as MatiuxDev. I have been studying programming since I was 17 years old, I really like creating innovative things, I also learn a lot about new things
     </SectionText>
     <Button onCLick={()=> window.location = 'https://google.com'}>Dowload CV (Comming Soon)</Button>
   </LeftSection>
  </Section>
);

export default Hero;