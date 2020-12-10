import styled from "styled-components";

const Card = styled.div`
  height: 400px;
  width: 280px;
  display: flex;
  border-radius: 25px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  filter: drop-shadow(0px 0px 25px #2c2c3c) brightness(0.85);
  background: rgb(10, 45, 78);
  background: linear-gradient(
    0deg,
    rgba(10, 45, 78, 1) 25%,
    rgba(2, 65, 110, 1) 72%
  );
`;
export default Card;
