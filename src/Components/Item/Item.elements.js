import styled from "styled-components";

export const ListBox = styled.div`
  width: 300px;
  background-color: #49426c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px 0 10px;
  border: 1px solid #49426c;
  border-radius: 10px;
  color: #49426c;
  object-fit: contain;
  background-color: #fff;
`;
export const ListBoxImg = styled.img`
  background-color: transparent;
  width: 160px;
  height: 140px;
  /* filter: brightness(1.1);
  mix-blend-mode: multiply; */
`;
export const ListBoxTitle = styled.span`
  color: #212121;
  font-size: 1rem;
`;
export const ListBoxPrice = styled.span`
  color: #212121;
  font-size: 1.5rem;
`;
