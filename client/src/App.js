import React from 'react';
//import { Route, Switch, Redirect  } from 'react-router-dom';
//import Home from "./views/Home/Home"
//import NotFound from "./views/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import Model from "./components/Model"
import Meteorology from "./components/Meteorology"
import {Form, Button} from 'react-bootstrap';
import {Gaussian} from "./components/Gaussian";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modelType: '',
      stableValue: '',
      fireCloudTop: 0,
      fireRadius: 0,
      sourceAmount: 0,
      receptorDistance: [],
      receptorHeight: 0,
      releaseHeight: 0,
      windSpeed: 0,
      concentration: []
    };
  }

  modelTypeUpdate = modelType => {
    this.setState(
      { modelType },
      () => console.log(`Model Type: `, this.state.modelType)
    );
  }

  stableValueUpdate = stableValue => {
    this.setState(
      { stableValue },
      () => console.log(`Stability Value: `, this.state.stableValue)
    );
  }

  fireCloudTopUpdate = fireCloudTop => {
    this.setState(
      { fireCloudTop },
      () => console.log(`Fire Cloud Top: `, this.state.fireCloudTop)
    );
  }

  fireRadiusUpdate = fireRadius => {
    this.setState(
      { fireRadius },
      () => console.log(`Fire Radius: `, this.state.fireRadius)
    );
  }
  
  sourceAmountUpdate = sourceAmount => {
    this.setState(
      { sourceAmount },
      () => console.log(`Source Amount: `, this.state.sourceAmount)
    );
  }

  //******* need to make sure this is how to pass an array *******//
  // Not implemented
  receptorDistanceUpdate = receptorDistance => {
    this.setState(
      { receptorDistance },
      () => console.log(`Receptor Distance Array: `, this.state.receptorDistance)
    );
  }
  
  // Not implemented
  receptorHeightUpdate = receptorHeight => {
    this.setState(
      { receptorHeight },
      () => console.log(`Receptor Height: `, this.state.receptorHeight)
    );
  }
  
  releaseHeightUpdate = releaseHeight => {
    this.setState(
      { releaseHeight },
      () => console.log(`Release Height: `, this.state.releaseHeight)
    );
  }

  windSpeedUpdate = windSpeed => {
    this.setState(
      { windSpeed },
      () => console.log(`Wind Speed: `, this.state.windSpeed)
    );
  }

  onSubmit(e) {
    e.preventDefault();
    
    // On Submit should contain the error checking

    for (var i = 0; i < this.state.receptorDistance.length; i++)
    {
      this.state.concentration.push(Gaussian(this.state.modelType,
                                  this.state.stableValue,
                                  this.state.fireCloudTop,
                                  this.state.fireRadius,
                                  this.state.sourceAmount,
                                  this.state.receptorDistance[i],
                                  this.state.receptorHeight,
                                  this.state.releaseHeight,
                                  this.state.windSpeed
                                  ));
    }
  }

  render() {
    return (
      <div className="container-fluid">
          <Header></Header>
          <div  className="container"
                style={{paddingTop: 20}}>
            <Form onSubmit={this.onSubmit}>
              <Model  modelTypeUpdate={this.modelTypeUpdate.bind(this)}
                      fireCloudTopUpdate={this.fireCloudTopUpdate.bind(this)}
                      fireRadiusUpdate={this.fireRadiusUpdate.bind(this)}
                      sourceAmountUpdate={this.sourceAmountUpdate.bind(this)}
                      releaseHeightUpdate={this.releaseHeightUpdate.bind(this)}
                      />
              <Meteorology  windSpeedUpdate={this.windSpeedUpdate.bind(this)}
                            stableValueUpdate={this.stableValueUpdate.bind(this)}
                            />
              {/* <Receptors /> */}
              {/* <Output /> */}
            </Form>
          </div>
          <br></br>
          <div className="text-center">
            <Button type="submit" className="btn btn-dark" >Generate Output</Button>
          </div>
      </div>
    );
  }
}

export default App;
