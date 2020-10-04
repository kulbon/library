import styled from 'styled-components';
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';

export const StyledButtonGroup = styled(Button)`
  background: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #333333;
  border: 1px solid #ced4da;
  text-transform: none;
  font-size: 14px;
`;

export const StyledInputGroup = styled(InputGroup.Text)`
  background: #eceeef;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  > svg {
    width: 18px;
  }
`;
