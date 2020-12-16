import styled from 'styled-components'

//prettier-ignore
const ImgButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  padding: 6px;
  box-shadow: none;
  text-transform: uppercase;
  background-image: url('${(props) => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  color: #fff;
  transition: 350ms;
  filter:grayscale(100%);
  opacity:0;
  &&:hover {
    filter: drop-shadow(0px 0px 2px #dfdfdf);
    cursor:pointer;
  }
  &&:active{
      filter:grayscale(100%) invert(100%);
      transform: translateY(3px);
      border:none;
  }
`;

export default ImgButton
