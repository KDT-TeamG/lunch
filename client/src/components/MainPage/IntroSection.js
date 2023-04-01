import React from "react";

import "./IntroSection.scss";
import { Search, Grid } from "semantic-ui-react";

const Main = () => {
  return (
    <section className="intro-section">
      <div className="intro-block">
        <div
          style={{
            backgroundImage: `url(images/mainImg.jpg)`,
            backgroundSize: "100vw 80vh",
            backgroundRepeat: "no-repeat",
          }}
          className="intro"
        >
          <div className="intro-title">
            <p>다른 사람이 공유한 맛집을</p>
            <p>검색해 보세요.</p>
          </div>
          <div className="search-bar">
            <Grid>
              <Grid.Column>
                <Search placeholder="Search..." />
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
