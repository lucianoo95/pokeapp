import styled from 'styled-components'

const Circle = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  border: 1px solid #3322ff;
  display: block;
  position: absolute;
  z-index: 110;
  margin-top: -55px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px #2c2c2c;
  background: rgb(60, 60, 60);
  background: radial-gradient(
    circle,
    rgba(59, 150, 250, 0.5) 35%,
    rgba(0, 0, 0, 0) 100%
  );
`
export default Circle
