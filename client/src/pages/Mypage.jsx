import MyPageList from "../components/MyPage/MyPageList";
import { ProductConsumer } from "../contexts/ProductProvider";
// import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const MyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <main>
      <Header />
      <LikeItemSection>
        <div>좋아요 누른 맛집</div>
        <ProductConsumer>
          {(value) => {
            const { myPage } = value;
            if (myPage.length > 0) {
              return <MyPageList value={value} />;
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
