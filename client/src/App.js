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
import TableOutput from "./components/TableOutput";
import Errors from "./components/Errors";
import GraphOutput from "./components/GraphOutput";

const initialState = {
  fireCloudTopErr: "",
  fireRadiusErr: "",
  sourceAmountErr: "",
  receptorHeightErr: "",
  releaseHeightErr: "",
  windSpeedErr: "",
  blankError: "",
  receptorFieldErr: ""
}

const standardInterval = [0.03, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
  1, 2, 4, 6, 8, 10, 20, 40, 60, 80
]

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
      sourceUnits: 'Ci',
      distanceUnits: 'm',
      receptorUnits: 'km',
      speedUnits: 'm/s',
      receptDist: [],
      isSubmitted: false,
      graphOutput: [],
      tableOutput: []
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

  clearReceptorInputs = () => {
    this.setState({ receptorDistance: {}});
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

  standardReceptorUpdate = () => {
    this.setState(
      { receptorDistance: {}},
      () => {
        for(var i=0; i < standardInterval.length; i++){
          this.state.receptorDistance[i] = standardInterval[i];
        }
        console.log(`Receptor Distance Array: `, this.state.receptorDistance);
      }
    )
    //console.log(`Interval Qty: `, this.state.intervalQty)
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

  speedUnitsUpdate = speedUnits => {
    this.setState(
      { speedUnits },
      () => console.log(`Speed Units: `, this.state.speedUnits)
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

  receptorUnitsUpdate = receptorUnits => {
    this.setState(
      { receptorUnits },
      () => console.log(`Distance Units: `, this.state.receptorUnits)
    );
  }

  validate = () => {
    let sourceAmountErr = "";
    let fireCloudTopErr = "";
    let fireRadiusErr = "";
    let releaseHeightErr = "";
    let windSpeedErr = "";
    let receptorHeightErr = "";
    let blankError = "";
    let modelType = this.state.modelType;
    let speedUnits = this.state.speedUnits;
    let receptorFieldErr = "";

    const receptorFields = document.querySelectorAll('.receptor-control-input');
    
    for (let i = 0; i < receptorFields.length; i++) {
      const field = receptorFields[i];
      const value = field.value;

      if (value === "" || value < 0) {
        receptorFieldErr = "Error: Receptor fields cannot be blank or less than 0.";
        break;
      }
    }

    if (speedUnits === "m/s" && (this.state.windSpeed < 0.1 || this.state.windSpeed > 50)){
      windSpeedErr = "Error: Wind speed must be between 0.1 and 50 m/s (0.2 and 111 mph).";
    }

    if (speedUnits === "mph" && (this.state.windSpeed < 0.2 || this.state.windSpeed > 111)){
      windSpeedErr = "Error: Wind speed must be between 0.1 and 50 m/s (0.2 and 111 mph).";
    }

    if(!(this.state.sourceAmount && this.state.windSpeed 
        &&  this.state.receptorHeight)){
          blankError = "Error: Fields have been left blank.";
        }

    if (modelType === "General_Fire" && !(this.state.fireRadius && this.state.fireCloudTop)){
          blankError = "Error: Fields have been left blank.";
      }

    if (this.state.sourceAmount < 0){
        sourceAmountErr = "Error: Source Amount cannot be less than 0.";
      }

    if (this.state.fireCloudTop < 0){
        fireCloudTopErr = "Error: Fire Cloud Top cannot be less than 0.";
      }

    if (this.state.fireRadius < 0){
        fireRadiusErr = "Error: Fire Radius cannot be less than 0.";
      }

    if (modelType === "General_Plume" && (this.state.releaseHeight < 0 
        || !(this.state.releaseHeight))){
        releaseHeightErr = "Error: Release height cannot be blank or less than 0.";
      }
  
    //if (this.state.intervalQty < 0){
       // intervalQtyErr = "Error: Number of receptors cannot be less than 0.";
     // }

    if (this.state.receptorHeight < 0){
        receptorHeightErr = "Error: Receptor height cannot be less than 0.";
      }

    if (sourceAmountErr || fireCloudTopErr || fireRadiusErr || releaseHeightErr|| windSpeedErr 
      || receptorHeightErr || blankError || receptorFieldErr ){

        this.setState({sourceAmountErr, fireCloudTopErr, fireRadiusErr,
        releaseHeightErr, windSpeedErr, receptorHeightErr, blankError, receptorFieldErr});
        return false;
        
      }

      return true;
    }

  onSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();
    if(isValid){
      console.log(this.state);

      //clearing form
      this.setState(initialState);
      this.setState(
        {receptDist: Object.values(this.state.receptorDistance),
        graphOutput: [],
        tableOutput: [],
        isSubmitted: true},
        () => {
          //console.log("Running Gaussian Function");
          /*console.log(`Values Passed to Gaussian:`, `\n`,
                        `Model Type: `,         this.state.modelType, `\n`,
                        `Stability Value: `,    this.state.stableValue, `\n`,
                        `Fire Cloud Top: `,     this.state.fireCloudTop, `\n`,
                        `Fire Radius: `,        this.state.fireRadius, `\n`,
                        `Source Amount: `,      this.state.sourceAmount, `\n`,
                        `Receptor Distance: `,  this.state.receptDist, `\n`,
                        `Receptor Height: `,    this.state.receptorHeight, `\n`,
                        `Release Height: `,     this.state.releaseHeight, `\n`,
                        `Wind Speed: `,         this.state.windSpeed);*/
          let tempObject = {};
          for (let i = 0; i < this.state.receptDist.length; i++)
          {
            tempObject = {x : this.state.receptDist[i], concentration : Gaussian(this.state.modelType,
                                                                                this.state.stableValue,
                                                                                this.state.fireCloudTop,
                                                                                this.state.fireRadius,
                                                                                this.state.sourceAmount,
                                                                                this.state.receptDist[i],
                                                                                this.state.receptorHeight,
                                                                                this.state.releaseHeight,
                                                                                this.state.windSpeed
                                                                                )};
            this.state.tableOutput.push(tempObject);
          }
          this.setState({tableOutput: this.state.tableOutput});
          console.log(`Gaussian Output: \n` + this.state.tableOutput);
          //console.log(`isSubmitted: ` + this.state.isSubmitted);
          let multiplier = 1;
          for (let i=0; i<6; i++)
          {
            for (let j=multiplier; j<(10*multiplier); j+=(0.1*multiplier))
            {
              tempObject = {x : j, y : Gaussian(this.state.modelType,
                                                this.state.stableValue,
                                                this.state.fireCloudTop,
                                                this.state.fireRadius,
                                                this.state.sourceAmount,
                                                j,
                                                this.state.receptorHeight,
                                                this.state.releaseHeight,
                                                this.state.windSpeed
                                                )};
              this.state.graphOutput.push(tempObject);
            }
            multiplier*=10;
          }
          console.log(this.state.graphOutput);
          this.setState({graphOutput: this.state.graphOutput});
      });
    } 
  }

  render() {
    return (
      <div className="container-fluid">
          <Header></Header>
          <div  className="container"
                style={{paddingTop: 20}}
                >
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
                            speedUnitsUpdate={this.speedUnitsUpdate.bind(this)}
                            />
              <Receptors  receptorDistanceUpdate={this.receptorDistanceUpdate.bind(this)}
                          receptorHeightUpdate={this.receptorHeightUpdate.bind(this)}
                          standardReceptorUpdate={this.standardReceptorUpdate.bind(this)}
                          receptorUnitsUpdate={this.receptorUnitsUpdate.bind(this)}
                          clearReceptorInputs={this.clearReceptorInputs.bind(this)}
              />
              <Errors
                  sourceAmountErr={this.state.sourceAmountErr}
                  fireCloudTopErr={this.state.fireCloudTopErr}
                  fireRadiusErr={this.state.fireRadiusErr}
                  releaseHeightErr={this.state.releaseHeightErr}
                  windSpeedErr={this.state.windSpeedErr}
                  intervalQtyErr={this.state.intervalQtyErr}
                  receptorHeightErr={this.state.receptorHeightErr}
                  blankError={this.state.blankError}
                  receptorFieldErr={this.state.receptorFieldErr}
              />

              <div className="text-center">
                <Button type="submit" className="btn btn-dark" >Generate Output</Button>
              </div>
            </Form>
            <TableOutput modelType={this.state.modelType}
                    stableValue={this.state.stableValue}
                    fireCloudTop={this.state.fireCloudTop}
                    fireRadius={this.state.fireRadius}
                    sourceAmount={this.state.sourceAmount}
                    tableOutput={this.state.tableOutput}
                    receptorHeight={this.state.receptorHeight}
                    releaseHeight={this.state.releaseHeight}
                    windSpeed={this.state.windSpeed}
                    sourceUnits={this.state.sourceUnits}
                    distanceUnits={this.state.distanceUnits}
                    speedUnits={this.state.speedUnits}
                    receptorUnits={this.state.receptorUnits}
                    isSubmitted={this.state.isSubmitted}
                    />
            <GraphOutput  graphOutput={this.state.graphOutput}
                          isSubmitted={this.state.isSubmitted}
                          />
            <br></br>
          </div>
          
      </div>
    );
  }
}

export default App;