import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Ubuntu';
  font-size: 25px;
  text-align: center;
  font-weigth: 300;
  padding: 5px 15px;
  text-shadow: 0px 0px 5px #c3c3c3;
  color: #dfdfdf;
  margin-top: ${(props) => props.mgTop || '-4px'};
  text-transform: uppercase;
  opacity: 0;
`
export default Title
