import { Header } from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
     
      <Header/>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
