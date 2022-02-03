import styled from 'styled-components';

const StyledLink = styled.a`
  padding: 13px 35px 16px;
  border-radius: 26px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.14);
  background-color: #00f; 
`;

const StyledSpan = styled.span`
  width: 160px;
  height: 23px;
  object-fit: contain;
  font-family: Manrope;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

 const MainLink = ({text, link}) => {

  return (
    <StyledLink href={ link }>
      <StyledSpan>{text ?? ''}</StyledSpan>
    </StyledLink>
  )
}

export default MainLink