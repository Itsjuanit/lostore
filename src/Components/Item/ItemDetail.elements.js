import styled from "styled-components";

export const DetailBox = styled.div`
  width: 700px;
  background-color: #49426c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #49426c;
  border-radius: 10px;
  color: #49426c;
  object-fit: contain;
  background-color: #fff;
`;

export const DetailBoxImg = styled.img`
  background-color: transparent;
  width: 160px;
  height: 140px;
  /* filter: brightness(1.1);
  mix-blend-mode: multiply; */
`;
export const DetailBoxTitle = styled.span`
  color: #212121;
  font-size: 1rem;
`;
export const DetailBoxPrice = styled.span`
  color: #212121;
  font-size: 1.5rem;
`;
