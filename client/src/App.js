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

const initialState = {
      modelType: 'General_Plume',
      stableValue: '',
      fireCloudTop: 0,
      fireCloudTopErr: "",
      fireRadius: 0,
      fireRadiusErr: "",
      sourceAmount: 0,
      sourceAmountErr: "",
      receptorDistance: {},
      intervalQty: 0,
      intervalQtyErr: "",
      receptorHeight: 0,
      receptorHeightErr: "",
      releaseHeight: 0,
      releaseHeightErr: "",
      windSpeed: 0,
      windSpeedErr: "",
      concentration: []
}
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialState;
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
      () => console.log(`Source Amount: `, this.state.sourceAmount),

      
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
  
  // Not implemented
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

  validate = () => {
    let sourceAmountErr = "";
    let fireCloudTopErr = "";
    let fireRadiusErr = "";
    let releaseHeightErr = "";
    let windSpeedErr = "";
    let intervalQtyErr = "";
    let receptorHeightErr = "";

    if (this.state.sourceAmount < 0){
      sourceAmountErr = "Invalid input: Source Amount cannot be less than 0.";
    }

    if (this.state.fireCloudTop < 0){
      fireCloudTopErr = "Invalid input: Fire Cloud Top cannot be less than 0.";
    }

    if (this.state.fireRadius < 0){
      fireRadiusErr = "Invalid input: Fire Radius cannot be less than 0.";
    }

    if (this.state.releaseHeight < 0){
      releaseHeightErr = "Invalid input: Height cannot be less than 0.";
    }

    if (this.state.windSpeed < 0.2 || this.state.windSpeed > 111){
      windSpeedErr = "Invalid input: Wind speed must be between 0.2 and 111 mph.";
    }

    if (this.state.intervalQty < 0){
      intervalQtyErr = "Invalid input: Number of receptors cannot be less than 0.";
    }

    if (this.state.receptorHeight < 0){
      receptorHeightErr = "Invalid input: Receptor height cannot be less than 0.";
    }

    if (sourceAmountErr || fireCloudTopErr || fireRadiusErr 
      || releaseHeightErr|| windSpeedErr || intervalQtyErr || receptorHeightErr ){

      this.setState({sourceAmountErr, fireCloudTopErr, fireRadiusErr,
      releaseHeightErr, windSpeedErr,  intervalQtyErr, receptorHeightErr});
      return false;
      
    }

    return true;
  }

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state);

      //clearing form
      this.setState(initialState);
    }
    
    this.setState(
      { concentration: [] },
      () => console.log(`Reset Concentration: `, this.state.concentration)
    );
    console.log(`Submitted: ` + this.state.receptorDistance);
    var receptDist = Object.values(this.state.receptorDistance);

    for (var i = 0; i < receptDist.length; i++)
    {
      console.log(`Values Passed to Gaussian:`, `\n`, 
                  `Model Type: `,         this.state.modelType, `\n`,
                  `Stability Value: `,    this.state.stableValue, `\n`,
                  `Fire Cloud Top: `,     this.state.fireCloudTop, `\n`,
                  `Fire Radius: `,        this.state.fireRadius, `\n`,
                  `Source Amount: `,      this.state.sourceAmount, `\n`,
                  `Receptor Distance: `,  receptDist[i], `\n`,
                  `Receptor Height: `,    this.state.receptorHeight, `\n`,
                  `Release Height: `,     this.state.releaseHeight, `\n`,
                  `Wind Speed: `,         this.state.windSpeed);
      this.state.concentration.push(Gaussian(this.state.modelType,
                                          this.state.stableValue,
                                          this.state.fireCloudTop,
                                          this.state.fireRadius,
                                          this.state.sourceAmount,
                                          receptDist[i],
                                          this.state.receptorHeight,
                                          this.state.releaseHeight,
                                          this.state.windSpeed
                                          ));
    }
    console.log(`Gaussian Concentration Output: \n` + this.state.concentration);
  }

  render() {
    return (
      <div className="container-fluid">
          <Header></Header>
          <div  className="container"
                style={{paddingTop: 20}}>
            <Form onSubmit= {this.handleSubmit}>{/*onSubmit.bind(this)}>*/}
              <Model  modelTypeUpdate={this.modelTypeUpdate.bind(this)}
                      fireCloudTopUpdate={this.fireCloudTopUpdate.bind(this)}
                      fireRadiusUpdate={this.fireRadiusUpdate.bind(this)}
                      sourceAmountUpdate={this.sourceAmountUpdate.bind(this)}  
                      releaseHeightUpdate={this.releaseHeightUpdate.bind(this)}
                      />
                      
              <Meteorology  windSpeedUpdate={this.windSpeedUpdate.bind(this)}
                            stableValueUpdate={this.stableValueUpdate.bind(this)}
                            />
              <Receptors  receptorDistanceUpdate={this.receptorDistanceUpdate.bind(this)}
                          receptorHeightUpdate={this.receptorHeightUpdate.bind(this)}
                          intervalQtyUpdate={this.intervalQtyUpdate.bind(this)}
                          
              />

              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.sourceAmountErr}
                      </div>
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.fireCloudTopErr}
                      </div>
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.fireRadiusErr}
                      </div>
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.releaseHeightErr}
                      </div>
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.WindSpeedErr}
                      </div>
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.intervalQtyErr}
                      </div>  
              <div style={{fontSize: 14, color: "red"}}>
                        {this.state.receptorHeightErr}
                      </div> 
                            
              {/* <Output /> */}
              <br></br>
              <div className="text-center">
                <Button type="submit" className="btn btn-dark" >Generate Output</Button>
              </div>
            </Form>
          </div>
          
      </div>
    );
  }
}

export default App;
