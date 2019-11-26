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
import Receptors from "./components/Receptors";
import Output from "./components/Output";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modelType: 'General_Plume',
      stableValue: 'A',
      fireCloudTop: 0,
      fireRadius: 0,
      sourceAmount: 0,
      receptorDistance: {},
      intervalQty: 0,
      receptorHeight: 0,
      releaseHeight: 0,
      windSpeed: 0,
      concentration: [],
      sourceUnits: 'Ci',
      distanceUnits: 'm',
      receptDist: [],
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

  receptorDistanceUpdate = newElement => {
    this.setState(
      // prevState => ({
      //   receptorDistance: [...prevState.receptorDistance, newElement]
      // }),
      () => {
        if(newElement.id){
          var id={};
          id[newElement.id] = newElement.value;
          this.state.receptorDistance[newElement.id] = newElement.value
        }else{
          //console.log(newElement);
        }
        
        console.log(`Receptor Distance Array: `, this.state.receptorDistance);
        // console.log(`NewElement ID: `, newElement.id);
        // console.log(`NewElement Value: `, newElement.value);
      }
    );
  }
  
  receptorHeightUpdate = receptorHeight => {
    this.setState(
      { receptorHeight },
      () => console.log(`Receptor Height: `, this.state.receptorHeight)
    );
  }

  intervalQtyUpdate = intervalQty => {
    this.setState(
      { intervalQty },
      () => {
        this.setState(
          { receptorDistance: {}},
          () => {
            for(var i=0; i < intervalQty; i++){
              //need to pass interval to this loop not Qty, just POC here.
              //this.state.receptorDistance[i] = (i+1)*intervalQty;
            }
          }
        )
      },
      console.log(`Interval Qty: `, this.state.intervalQty)
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

  sourceUnitsUpdate = sourceUnits => {
    this.setState(
      { sourceUnits },
      () => console.log(`Source Units: `, this.state.sourceUnits)
    );
  }

  distanceUnitsUpdate = distanceUnits => {
    this.setState(
      { distanceUnits },
      () => console.log(`Distance Units: `, this.state.distanceUnits)
    );
  }

  onSubmit(e) {
    e.preventDefault();
    
    //this.setState(
    //  { concentration: [] },
    //  () => console.log(`Reset Concentration: `, this.state.concentration)
    //);
    this.setState(
      {receptDist: Object.values(this.state.receptorDistance)},
      () => {
        for (var i = 0; i < this.state.receptDist.length; i++)
        {
          console.log(`Values Passed to Gaussian:`, `\n`, 
                      `Model Type: `,         this.state.modelType, `\n`,
                      `Stability Value: `,    this.state.stableValue, `\n`,
                      `Fire Cloud Top: `,     this.state.fireCloudTop, `\n`,
                      `Fire Radius: `,        this.state.fireRadius, `\n`,
                      `Source Amount: `,      this.state.sourceAmount, `\n`,
                      `Receptor Distance: `,  this.state.receptDist[i], `\n`,
                      `Receptor Height: `,    this.state.receptorHeight, `\n`,
                      `Release Height: `,     this.state.releaseHeight, `\n`,
                      `Wind Speed: `,         this.state.windSpeed);
          this.state.concentration.push(Gaussian(this.state.modelType,
                                              this.state.stableValue,
                                              this.state.fireCloudTop,
                                              this.state.fireRadius,
                                              this.state.sourceAmount,
                                              this.state.receptDist[i],
                                              this.state.receptorHeight,
                                              this.state.releaseHeight,
                                              this.state.windSpeed
                                              ));
        }
        console.log(`Gaussian Concentration Output: \n` + this.state.concentration);
    });
    //this.state.receptDist = Object.values(this.state.receptorDistance);    
  }

  render() {
    return (
      <div className="container-fluid">
          <Header></Header>
          <div  className="container"
                style={{paddingTop: 20}}>
            <Form onSubmit= {this.onSubmit.bind(this)}>
              <Model  modelTypeUpdate={this.modelTypeUpdate.bind(this)}
                      fireCloudTopUpdate={this.fireCloudTopUpdate.bind(this)}
                      fireRadiusUpdate={this.fireRadiusUpdate.bind(this)}
                      sourceAmountUpdate={this.sourceAmountUpdate.bind(this)}
                      releaseHeightUpdate={this.releaseHeightUpdate.bind(this)}
                      sourceUnitsUpdate={this.sourceUnitsUpdate.bind(this)}
                      distanceUnitsUpdate={this.distanceUnitsUpdate.bind(this)}
                      />
              <Meteorology  windSpeedUpdate={this.windSpeedUpdate.bind(this)}
                            stableValueUpdate={this.stableValueUpdate.bind(this)}
                            />
              <Receptors  receptorDistanceUpdate={this.receptorDistanceUpdate.bind(this)}
                          receptorHeightUpdate={this.receptorHeightUpdate.bind(this)}
                          intervalQtyUpdate={this.intervalQtyUpdate.bind(this)}
              />
              <div className="text-center">
                <Button type="submit" className="btn btn-dark" >Generate Output</Button>
              </div>
            </Form>
            <Output modelType={this.state.modelType}
                    stableValue={this.state.stableValue}
                    fireCloudTop={this.state.fireCloudTop}
                    fireRadius={this.state.fireRadius}
                    sourceAmount={this.state.sourceAmount}
                    receptDist={this.state.receptDist}
                    receptorHeight={this.state.receptorHeight}
                    releaseHeight={this.state.releaseHeight}
                    windSpeed={this.state.windSpeed}
                    concentration={this.state.concentration}
                    sourceUnits={this.state.sourceUnits}
                    distanceUnits={this.state.distanceUnits}
                    />
            <br></br>
          </div>
          
      </div>
    );
  }
}

export default App;