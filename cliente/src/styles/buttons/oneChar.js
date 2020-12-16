import styled from 'styled-components'

const OneCharButton = styled.button`
  padding: 5px 10px;
  border: none;
  font-family: 'Ubuntu';
  font-styled: bold;
  font-size: 10px;
  box-shadow: none;
  text-transform: uppercase;
  background-color: transparent;
  color: white;
  transition: 250;
  &&:hover {
    filter: invert(30%);
    transform: translateY(1px);
    cursor: pointer;
  }
  &&:active {
    transform: translateY(3px);
  }
`

export default OneCharButton
