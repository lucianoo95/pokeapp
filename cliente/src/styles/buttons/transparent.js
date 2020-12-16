import styled from 'styled-components'

const TransparentButton = styled.button`
  font-family: 'Ubuntu';
  font-styled: bold;
  font-size: 10px;
  font-weigth: 1000;
  opacity: 0;
  margin-top: -4px;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  padding: 6px;
  box-shadow: none;
  text-transform: uppercase;
  background-color: transparent;
  color: #fff;
  text-shadow: 0px 0px 0px #dfdfdf;
  transition: 200ms;
  &&:hover {
    text-shadow: 0px 0px 4px #dfdfdf;
    box-shadow: 0px 0px 5px #dfdfdf;
    cursor: pointer;
  }
  &&:active {
    background-color: #dfdfdf;
    transform: translateY(3px);
    color: #2c2c2c;
    box-shadow: 0px 0px 5px #dfdfdf;
    border: none;
  }
`

export default TransparentButton
