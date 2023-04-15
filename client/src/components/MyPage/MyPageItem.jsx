import styled from "styled-components";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card";

const MyPageItem = ({ item, value }) => {
  const { id, img, placeName, address, category } = item;
  const { removeItem } = value;
  return (
    <Card
      cardContainer={
        <CardContent>
          <img
            src={img}
            alt="storeImg"
            style={{
              width: "200px",
              height: "150px",
            }}
          />
          <div className="place-name">{placeName}</div>
          <div>{category}</div>
          <div>{address}</div>
          <RemoveIcon>
            <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(id)} />
          </RemoveIcon>
        </CardContent>
      }
    />
  );
};

export default MyPageItem;

const CardContent = styled.div`
  display: inline-block;
  height: 300px;
  padding: 1rem;
  margin: 10px 5px;
  background: #eee;
  cursor: pointer;
  box-shadow: 5px 5px 10px #a9a9a9;

  div {
    margin: 5px 0;
  }

  .place-name {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

const RemoveIcon = styled.div`
  position: relative;
  left: 180px;
  font-size: 1.3rem;
`;
