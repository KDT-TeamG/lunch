import { ProductConsumer } from "../../contexts/ProductProvider";
import CardList from "./CardList";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const Cardsec = () => {
  return (
    <CardSection>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <CardFlex>
              <ProductConsumer>
                {(value) => {
                  return value.cardItems.map((cardItem) => {
                    return <CardList key={cardItem.id} cardItem={cardItem} />;
                  });
                }}
              </ProductConsumer>
            </CardFlex>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CardSection>
  );
};

export default Cardsec;

const CardSection = styled.section`
  width: 90vw;
  margin: auto;
  margin-top: 100px;
  position: relative;
  top: 550px;
`;

const CardFlex = styled.div`
  width: 95%;
  margin: auto;
`;
