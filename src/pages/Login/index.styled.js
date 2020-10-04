import styled from 'styled-components';
import InputGroup from 'react-bootstrap/esm/InputGroup';
export const FlexDiv = styled('div')`
  display: flex;
  justify-content: space-around;
`;

export const LoginBox = styled('main')`
  width: 536px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background: #fff;
  border-radius: 14px;
  legend {
    font-size: 18px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.9px;
    padding: 0 17px;
  }
  h1 {
    font-size: 48px;
    line-height: 58px;
  }
  h2 {
    font-weight: normal;
    letter-spacing: 0;
  }
`;

export const StyledInputGroup = styled(InputGroup.Text)`
  background: #eceeef;
  color: #000;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  > svg {
    height: 24px;
  }
`;
