import styled from 'styled-components';


export const ImgRounded = styled.img`
border-radius: 50%;
display: block;
  margin-top: 100px;
  margin-left: 25%;
  margin-right: auto;
  width: 70%;
@media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`;