import MyPageList from "../components/MyPage/MyPageList";
import { ProductConsumer } from "../contexts/ProductProvider";
// import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const MyPage = () => {
  return (
    <main>
      <Header />
      <LikeItemSection>
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
`;
