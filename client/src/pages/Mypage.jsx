import MyPageList from "../components/MyPage/MyPageList";
import { ProductConsumer } from "../contexts/ProductProvider";
// import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import liked from "../images/liked.png";

const MyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <main>
      <Header />
      <LikeItemSection>
        <LikeItemSectionTitle>
          좋아요 누른 맛집
          <img src={liked} alt="heart img" />
        </LikeItemSectionTitle>
        <ProductConsumer>
          {(value) => {
            const { myPage } = value;
            if (myPage.length > 0) {
              return <MyPageList value={value} />;
            } else {
              return <Empty>좋아요를 누른 맛집이 아직 없습니다.</Empty>;
            }
          }}
        </ProductConsumer>
      </LikeItemSection>
    </main>
  );
};

export default MyPage;

const LikeItemSection = styled.section`
  position: relative;
  top: 100px;
  width: 90%;
  margin: auto;
`;

const LikeItemSectionTitle = styled.div`
  font-size: 1.8rem;
  display: flex;
  margin-bottom: 20px;

  img {
    width: 25px;
    margin-left: 5px;
  }
`;

const Empty = styled.div`
  font-size: 1.3rem;
`;
