
import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';

class App extends Component{
render() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route  path='/about' component={About}/>
          <Route  path='/contact' component={Contact}/>
          <Route component={NoMatch}/>
        </Routes>
      </Router>

    </React.Fragment>
  );
}
}
export default App;
