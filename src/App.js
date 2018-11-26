import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import dndDoubleList from "./components/dndDoubleList";


const App = () => (
  <Container>
    <Route path="/dnd" exact component={dndDoubleList} />
  </Container>
);

export default App;