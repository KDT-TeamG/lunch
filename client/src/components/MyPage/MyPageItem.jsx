import styled from "styled-components";

const MyPageItem = ({ item }) => {
  const { id, img, placeName, address, category } = item;
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
      <div>{placeName}</div>
      <div>{category}</div>
      <div>{address}</div>
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
