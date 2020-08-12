import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 60px;
  color: #616161;

  @media (max-width: 770px) {
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0 0 25px 0;
    align-items: flex-start;
    font-size: 14px;
  }
`;

export const RadioInput = styled.input`
  margin-bottom: 17px;

  @media (max-width: 600px) {
    margin-right: 75px;
  }
`;

export const Legend = styled.legend`
  
  display:none;
`
;

export const Fieldset = styled.fieldset`
  
  
  border-style: none;
`;
