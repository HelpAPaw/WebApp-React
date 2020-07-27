import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { PrivacyPolicy } from './PrivacyPolicy';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { FAQPage } from './FAQPage';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';

class App extends Component {
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
              <Route path="/privacypolicy" component={PrivacyPolicy} />
              <Route path="/contact" component={Contact} />
              <Route path="/FAQ" component={FAQPage} />
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
