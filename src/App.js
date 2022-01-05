import "./App.css";
import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route path="/" exact component={HomePage} />
       <Route path="/product/:id" exact component={ProductDetails}/>

     </Switch>

   </Router>
      
    </div>
  );
}

export default App;
