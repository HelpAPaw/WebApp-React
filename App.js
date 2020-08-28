import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import Map from "./Map";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Jumbotron } from "./Components/Jumbotron";

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
    };
  } */

  /* componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState((prevState) => ({
          lat: prevState.lat + position.coords.latitude,
          lng: prevState.lng + position.coords.longitude,
        }));
        
      });
    }
  }*/

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       Test
//     </div>
//   );
// }

export default App;

render(<App />, document.getElementById("root"));
