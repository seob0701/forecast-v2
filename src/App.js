import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Nav, About, Board, Login, Register, Home, Write } from "./pages/index";
import { useEffect, useState } from "react";
import Axios from 'axios';

function App() {

  const [loggedStatus, setLoggedStatus] = useState(false);
  const _login = () => {
      Axios.get("http://localhost:3001/login").then((response) => {
        setLoggedStatus(response.data.loggedIn);
      });
    };
  
    useEffect(() => {
      _login();
      // console.log(userInfo);
    }, []);

    

    const RouteIf = ({ role, component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props => {
            /* 권한이 없을 경우 */
            if (role === false) {
              return <Login />
            }
    
            /* 권한이 있을 경우 */
            if (Component) {
              return <Component {...props} />
            }
    
            return null
          }}
        />
      )
    }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <RouteIf
        path="/write"
        exact
        component={Write}
        role ={loggedStatus}/>
      </Switch>
    </div>
  );
}

export default App;
