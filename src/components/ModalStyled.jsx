import styled from 'styled-components';

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 18, 19, 0.4);
  ;
  z-index: 1;
`;

export const StyledModal = styled.div`
position:absolute;
top: 40px;
  left: 50%;
  transform: translate(-50%, 0%);
width: 982px;
ovrflow:auto;
padding: 40px;
border-radius: 20px;
z-index: 100;
box-shadow: 0px 4px 8px 0px #407BFF33;
background-color: #fff;
`