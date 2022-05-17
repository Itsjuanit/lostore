import {
  DetailBox,
  DetailBoxImg,
  DetailBoxTitle,
  DetailBoxPrice,
} from "./ItemDetail.elements";
const ItemDetail = ({ item }) => {
  return (
    <DetailBox>
      <DetailBoxImg src={item.img} alt="Imagen" />
      <DetailBoxTitle>{item.title}</DetailBoxTitle>
      <DetailBoxPrice>${item.price}</DetailBoxPrice>
    </DetailBox>
  );
};

export default ItemDetail;
