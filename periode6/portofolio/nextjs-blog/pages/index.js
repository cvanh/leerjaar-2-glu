import { ThemeProvider, Preflight } from "@xstyled/styled-components";
import { Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";
import Test from "../components/Test";
import theme from "../utils/theme";

function Page({Component}) {
  // if (typeof window === 'undefined') {
  //   return null
  // }

  return (
    <ThemeProvider theme={theme}>

      <Router>
          <Switch>

        <Route path="/" component={Home}/>
      
        <Route path="/home" component={Home} />
      
        <Route path="/test" component={Test} />
        
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default Page;
