import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Nav, About, Board, Login, Register, Home, Write } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/Write" component={Write} />
      </Switch>
    </div>
  );
}

export default App;
