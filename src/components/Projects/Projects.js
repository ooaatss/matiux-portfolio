import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <br/>
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, image, description, tags, visit, source})=>(
        <BlogCard key={id}>
         <Img src={image}/>
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr/>
           </TitleContent>
             <CardInfo>{description}</CardInfo>
             <div>
               <TitleContent>Stack</TitleContent>
               <TagList>
                 {tags.map((tag, i)=>(
                   <Tag key={i}>{tag}</Tag>
                 ))}
               </TagList>
               <UtilityList>
                 <ExternalLinks href={visit}>Live Preview</ExternalLinks>
                 <ExternalLinks href={source}>Source Code</ExternalLinks>
               </UtilityList>
             </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;