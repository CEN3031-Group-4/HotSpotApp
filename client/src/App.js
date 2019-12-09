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
import {ArrivalTime, DecayAdjust, TotalDose} from "./components/RadCalculations";
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
  intervalQtyErr: "",
  blankError: "",
  receptorFieldErr: "",
  nuclideErr: ""
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
      nuclideOption: '',
      halfLife: 0,
      decayConstant: 0,
      classOption: '',
      ageOption: 0,
      effectiveDose: 0,
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
      tableOutput: [],
      outputModelType: '',
      outputNuclideOption: '',
      outputHalfLife: 0,
      outputDecayConstant: 0,
      outputClassOption: '',
      outputAgeOption: '',
      outputEffectiveDose: '',
      outputStableValue: '',
      outputFireCloudTop: 0,
      outputFireRadius: 0,
      outputSourceAmount: 0,
      outputReceptorHeight: 0,
      outputReleaseHeight: 0,
      outputWindSpeed: 0,
      outputSourceUnits: '',
      outputDistanceUnits: '',
      outputReceptorUnits: '',
      outputSpeedUnits: '',
      graphDistanceUnits: 'm',
      graphReceptorUnits: 'm',
      
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

  nuclideUpdate = nuclideOption => {
    this.setState(
      { nuclideOption },
      () => console.log(`Nuclide: `, this.state.nuclideOption)
    );
  }

  halflifeUpdate = halfLife => {
    this.setState(
      { halfLife },
      () => {
        console.log(`Half-life: `, this.state.halfLife);
        let tempDecayConstant = 0.69 / halfLife;
        this.setState(
          { decayConstant : tempDecayConstant },
          () => console.log(`Decay Constant: `, this.state.decayConstant)
        );
      });
  }

  ageUpdate = ageOption => {
    this.setState(
      { ageOption },
      () => console.log(`Age Option: `, this.state.ageOption, ` days`)
    );
  }

  doseUpdate = effectiveDose => {
    this.setState(
      { effectiveDose },
      () => console.log(`Dose Amount: `, this.state.effectiveDose)
    );
  }

  classUpdate = classOption => {
    this.setState(
      { classOption },
      () => console.log(`Class Option: `, this.state.classOption)
      //if ICRP do some work...
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
    let intervalQtyErr = "";
    let modelType = this.state.modelType;
    let speedUnits = this.state.speedUnits;
    let receptorFieldErr = "";
    let nuclideErr = "";

    const receptorFields = document.querySelectorAll('.receptor-control-input');
    
    for (let i = 0; i < receptorFields.length; i++) {
      const field = receptorFields[i];
      const value = field.value;

      if (value === "" || value < 0) {
        receptorFieldErr = "Error: Receptor fields cannot be blank or less than 0.";
        break;
      }
    }

    if (this.state.ageOption === 0){
      nuclideErr = "Error: Nuclide, Lung Class, and Age must be selected.";
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
  
    if (this.state.intervalQty < 0){
        intervalQtyErr = "Error: Number of receptors cannot be less than 0.";
      }

    if (this.state.receptorHeight < 0){
        receptorHeightErr = "Error: Receptor height cannot be less than 0.";
      }

    if (sourceAmountErr || fireCloudTopErr || fireRadiusErr || releaseHeightErr|| windSpeedErr 
      || receptorHeightErr || blankError || receptorFieldErr || intervalQtyErr || nuclideErr){

        this.setState({sourceAmountErr, fireCloudTopErr, fireRadiusErr, intervalQtyErr,
        releaseHeightErr, windSpeedErr, receptorHeightErr, blankError, receptorFieldErr, nuclideErr});
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
        {outputModelType: this.state.modelType,
        outputStableValue: this.state.stableValue,
        outputFireCloudTop: this.state.fireCloudTop,
        outputFireRadius: this.state.fireRadius,
        outputSourceAmount: this.state.sourceAmount,
        outputReceptorHeight: this.state.receptorHeight,
        outputReleaseHeight: this.state.releaseHeight,
        outputWindSpeed: this.state.windSpeed,
        outputSourceUnits: this.state.sourceUnits,
        outputDistanceUnits: this.state.distanceUnits,
        outputReceptorUnits: this.state.receptorUnits,
        outputSpeedUnits: this.state.speedUnits,
        outputNuclideOption: this.state.nuclideOption,
        outputClassOption: this.state.classOption,
        outputAgeOption: this.state.ageOption,
        outputEffectiveDose: this.state.effectiveDose,
        outputHalfLife: this.state.halfLife,
        outputDecayConstant: this.state.decayConstant,
        receptDist: Object.values(this.state.receptorDistance),
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
          let tempConcentration = 0;
          let tempArrivalTime = 0;
          let tempDecayAdjConc = 0;
          for (let i = 0; i < this.state.receptDist.length; i++)
          {
            tempConcentration = Gaussian(this.state.modelType,
                                        this.state.stableValue,
                                        this.state.fireCloudTop,
                                        this.state.fireRadius,
                                        this.state.sourceAmount,
                                        this.state.receptDist[i],
                                        this.state.receptorHeight,
                                        this.state.releaseHeight,
                                        this.state.windSpeed,
                                        this.state.distanceUnits,
                                        this.state.speedUnits,
                                        this.state.receptorUnits
                                        );
            tempArrivalTime = ArrivalTime(this.state.receptDist[i],
                                          this.state.windSpeed,
                                          this.state.receptorUnits,
                                          this.state.speedUnits
                                          );
            tempDecayAdjConc = DecayAdjust(tempConcentration, tempArrivalTime, this.state.decayConstant);
            tempObject = {x : this.state.receptDist[i],
                          concentration : tempConcentration,
                          arrival : tempArrivalTime,
                          decayAdjConc : tempDecayAdjConc,
                          totalDose : TotalDose(tempDecayAdjConc, this.state.effectiveDose)};
            this.state.tableOutput.push(tempObject);
          }
          this.setState({tableOutput: this.state.tableOutput});
          //console.log(`Gaussian Output: \n` + this.state.tableOutput);
          //console.log(`isSubmitted: ` + this.state.isSubmitted);
          
          ///////////**************Graph Generator *************////////////
          let multiplier = 1;
          for (let i=0; i<6; i++)
          {
            for (let j=multiplier; j<(10*multiplier); j+=(0.1*multiplier))
            {
              tempConcentration = Gaussian(this.state.modelType,
                                          this.state.stableValue,
                                          this.state.fireCloudTop,
                                          this.state.fireRadius,
                                          this.state.sourceAmount,
                                          j,
                                          this.state.receptorHeight,
                                          this.state.releaseHeight,
                                          this.state.windSpeed,
                                          this.state.distanceUnits,
                                          this.state.speedUnits,
                                          this.state.graphReceptorUnits
                                          );
              tempArrivalTime = ArrivalTime(j,
                                this.state.windSpeed,
                                this.state.receptorUnits,
                                this.state.speedUnits
                                );
              tempDecayAdjConc = DecayAdjust(tempConcentration, tempArrivalTime, this.state.decayConstant);
              tempObject = {x : j,
                            y : TotalDose(tempDecayAdjConc, this.state.effectiveDose)
                          };
              
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
                      ageUpdate={this.ageUpdate.bind(this)}
                      doseUpdate={this.doseUpdate.bind(this)}
                      classUpdate={this.classUpdate.bind(this)}
                      releaseHeightUpdate={this.releaseHeightUpdate.bind(this)}
                      sourceUnitsUpdate={this.sourceUnitsUpdate.bind(this)}
                      distanceUnitsUpdate={this.distanceUnitsUpdate.bind(this)}
                      nuclideUpdate={this.nuclideUpdate.bind(this)}
                      halflifeUpdate={this.halflifeUpdate.bind(this)}
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
                  nuclideErr={this.state.nuclideErr}
              />

              <div className="text-center">
                <Button type="submit" className="btn btn-dark" >Generate Output</Button>
              </div>
            </Form>
            <TableOutput outputModelType={this.state.outputModelType}
                    outputStableValue={this.state.outputStableValue}
                    outputFireCloudTop={this.state.outputFireCloudTop}
                    outputFireRadius={this.state.outputFireRadius}
                    outputSourceAmount={this.state.outputSourceAmount}
                    tableOutput={this.state.tableOutput}
                    outputReceptorHeight={this.state.outputReceptorHeight}
                    outputReleaseHeight={this.state.outputReleaseHeight}
                    outputWindSpeed={this.state.outputWindSpeed}
                    outputSourceUnits={this.state.outputSourceUnits}
                    outputDistanceUnits={this.state.outputDistanceUnits}
                    outputSpeedUnits={this.state.outputSpeedUnits}
                    outputReceptorUnits={this.state.outputReceptorUnits}
                    graphDistanceUnits={this.state.graphDistanceUnits}
                    isSubmitted={this.state.isSubmitted}
                    outputNuclideOption={this.state.outputNuclideOption}
                    outputClassOption={this.state.outputClassOption}
                    outputAgeOption={this.state.outputAgeOption}
                    outputEffectiveDose={this.state.outputEffectiveDose}
                    outputHalfLife={this.state.outputHalfLife}
                    outputDecayConstant={this.state.outputDecayConstant}
                    />
            <GraphOutput  graphOutput={this.state.graphOutput}
                          isSubmitted={this.state.isSubmitted}
                          graphReceptorUnits={this.state.graphReceptorUnits}
                          outputSourceUnits={this.state.outputSourceUnits}
                          />
            <br></br>
          </div>
          
      </div>
    );
  }
}

export default App;