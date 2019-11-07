import React from 'react';
//import { Route, Switch, Redirect  } from 'react-router-dom';
//import Home from "./views/Home/Home"
//import NotFound from "./views/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import Model from "./components/Model"
import Meteorology from "./components/Meteorology"
import {Form, Button} from 'react-bootstrap';


const App = () => {
  return (
    <div>
        <Header></Header>
        <Form>
          <Model />
          <Meteorology />
          {/* <Receptors /> */}
          {/* <Output /> */}
        </Form>
        <br></br>
        <div className="text-center">
          <Button type="submit" className="btn btn-dark" >Generate Output</Button>
        </div>
    </div>
  );
}

export default App;
