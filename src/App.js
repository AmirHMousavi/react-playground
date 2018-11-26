import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import logo from "./logo.svg";

class App extends Component {
  state = {};

  render() {
    return (
      <Container text>
        <Grid columns={4}>
          <Grid.Column stretched>
            <Image src={logo} size="small" />
          </Grid.Column>
          <Grid.Column stretched>
            <Image src={logo} size="small" />
          </Grid.Column>
          <Grid.Column stretched>
            <Image src={logo} size="small" />
          </Grid.Column>
          <Grid.Column stretched>
            <Image src={logo} size="small" />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
