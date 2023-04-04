import MyPageItem from "./MyPageItem";
import { Grid } from "semantic-ui-react";

const MyPageList = ({ value }) => {
  const { myPage } = value;
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            {myPage.map((item) => {
              return <MyPageItem key={item.id} item={item} />;
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MyPageList;
