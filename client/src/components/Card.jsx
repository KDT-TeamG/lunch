import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const Card = ({ cardContainer }) => {
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Grid.Column>
          <CardFlex>{cardContainer}</CardFlex>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Card;

const CardFlex = styled.div`
  width: 95%;
  margin: auto;
`;
