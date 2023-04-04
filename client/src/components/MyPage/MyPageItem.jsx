import styled from "styled-components";

const MyPageItem = ({ item }) => {
  const { id, img, place_name, road_address_name, category } = item;
  return (
    <LikeItem>
      <img
        src={img}
        alt="storeImg"
        style={{
          width: "200px",
          height: "150px",
        }}
      />
      <div>{place_name}</div>
      <div>{category}</div>
      <div>{road_address_name}</div>
    </LikeItem>
  );
};

export default MyPageItem;

const LikeItem = styled.div`
  display: inline-block;
  //   width: 270px;
  height: 300px;
  background-color: #fff;
  border: 0.2rem solid black;
  padding: 1rem;
  margin: 10px 5px;
`;
