import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link, NavLink
} from "react-router-dom"
import About from './about/about';
import Home from './home/home';
import Work from './work/work';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/work" exact>
            <Work></Work>
          </Route>
          <Route path="/wdes798/work" exact>
            <Work></Work>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/wdes798/about" exact>
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/wdes798/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
