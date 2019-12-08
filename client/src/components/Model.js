import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';
import {lungClass,nuclides as Nuclides, icrp as ICRP} from '../assets/nuclides';

const options = [
    { value: 'General_Plume', label: 'General Plume' },
    { value: 'General_Fire', label: 'General Fire' }
];

const sourceUnitsOptions = [
    { value: 'Ci', label: 'Ci (Curies)' },
    { value: 'Bq', label: 'Bq (Becquerel)' }
];

const distanceUnitsOptions = [
    { value: 'm', label: 'm (meters)' },
    { value: 'ft', label: 'ft (feet)' }
];

const nuclides = Nuclides;
//const nuclideClasses = lungClass;
//console.log(lungClass);

class Model extends React.Component {

  state = {
    selectedOption: { value: 'General_Plume', label: 'General Plume' },
    sourceUnits: { value: 'Ci', label: 'Ci (Curies)' },
    distanceUnits: { value: 'm', label: 'm (meters)' },
    nuclideOption: null,
    classList: [],
    nuclideClasses: [],
    sourceOption: null,
    ageOption: null,
    classOption: ''
  };

  modelChange = selectedOption => {
    this.setState(
      { selectedOption },
       () => {
            console.log(`Option selected:`, this.state.selectedOption);
            this.props.modelTypeUpdate(this.state.selectedOption.value);
        }
    );
  };

  sourceUnitsChange = sourceUnits => {
    this.setState(
      { sourceUnits },
       () => {
           console.log(`Option selected:`, this.state.sourceUnits);
           this.props.sourceUnitsUpdate(this.state.sourceUnits.value);
       }
    );
  };

  distanceUnitsChange = distanceUnits => {
    this.setState(
      { distanceUnits },
       () => {
           console.log(`Option selected:`, this.state.distanceUnits);
           this.props.distanceUnitsUpdate(this.state.distanceUnits.value);
       }
    );
  };

  nuclideChange = nuclideOption => {
    this.setState(
      { nuclideOption },
       () => {
            console.log(`Option selected:`, this.state.nuclideOption);
            this.getClassList(this.state.nuclideOption.value);
            this.props.nuclideUpdate(this.state.nuclideOption.value);
            this.props.halflifeUpdate(this.state.nuclideOption['Half-life'])
       }
    );        
  };

  getClassList(nuclideOption){
    const lClasses = lungClass.filter(function(nuclide){
        return nuclide.Nuclide === nuclideOption;
    });
    this.setState({nuclideClasses:lClasses},
        ()=> {
            console.log(this.state.nuclideClasses);
        });
    const result = [];
    const map = new Map();
    for (const item of lClasses) {
        if(!map.has(item.lungClass)){
            map.set(item.lungClass, true);    // set any value to Map
            result.push({
                lungClass: item.lungClass
            });
        }
    }
    this.setState({classList:result},
        () => {
            const inputs = [];
            if(this.state.classList.length > 0){
                for(const lClass of this.state.classList){
                    //console.log(lClass)
                    inputs.push(<Form.Check 
                                    inline name='lClass' 
                                    type={'radio'} 
                                    key={lClass.lungClass} 
                                    id={lClass.lungClass} 
                                    label={lClass.lungClass} 
                                    value={lClass.lungClass} 
                                    onClick={this.classSelect.bind(this)}/>)
                }
                inputs.push(<Form.Check 
                                inline name='lClass' 
                                type={'checkbox'}
                                key={`ICRP`} 
                                id={`ICRP`} 
                                label={`ICRP`} 
                                value={''} 
                                onClick={this.classSelect.bind(this)}/>)
                this.setState({classInputs:inputs})
            }
            //console.log(this.state.classList);
        });    
  }

  sourceAmountChange(e) {
    this.props.sourceAmountUpdate(e.target.value);
  }

  ageChange = ageOption => {
    this.setState(
        { ageOption },
         () => {
             //console.log(`Nuclide Age selected:`, this.state.ageOption.value)
            }
      );
      //ageOption.value = the dose for the given nuclide, lung class, and age
    this.props.doseUpdate(ageOption.value);
    this.props.ageUpdate(ageOption.label);
  }

  classSelect(e) {
    if(e.target.id !== 'ICRP'){
        this.props.classUpdate(e.target.id);
        const tempClassList = this.state.nuclideClasses.filter(function(nuclide){
            return (nuclide.lungClass === e.target.id);
        });
        const doseList = [];
        for(const item of tempClassList){
            doseList.push({label:item.Age,value:item.Dose})
        }
        this.setState({doseList:doseList, ageOption:null});
    }
    else{
        //get the ICRP lungClass value and dose, 
        //get request from /api/nuclides/icrp will need to:
        //split nuclideOption on - and take [0] to pass to find{nuclide:''}
        if(document.getElementById('ICRP').checked){
            const nucelement = this.state.nuclideOption.value.split("-")[0];
            const nucICRP = ICRP.filter(function(nuclide){
                return (nuclide.Nuclide === nucelement);
            });
            //console.log(nucICRP[0].ICRP);
            const tempClassList = this.state.nuclideClasses.filter(function(nuclide){
                return (nuclide.lungClass === nucICRP[0].ICRP);
            });
            this.props.classUpdate(nucICRP[0].ICRP)
            const doseList = [];
            for(const item of tempClassList){
                doseList.push({label:item.Age,value:item.Dose})
            }
            this.setState({doseList:doseList, ageOption: null});
            //uncheck
            for(const radio of this.state.classList){
                document.getElementById(radio.lungClass).checked = false;
                document.getElementById(radio.lungClass).disabled = true;
            }
        }
        else{
            for(const radio of this.state.classList){
                document.getElementById(radio.lungClass).removeAttribute('disabled');
            }   
            this.setState({doseList:[],ageOption:null});
        }
    }
  }

  releaseHeightChange(e) {
    this.props.releaseHeightUpdate(e.target.value);
  }

  fireRadiusChange(e) {
    this.props.fireRadiusUpdate(e.target.value);
  }

  fireCloudTopChange(e) {
    this.props.fireCloudTopUpdate(e.target.value);
  }

  render() {
    const { selectedOption, sourceUnits, distanceUnits, nuclideOption, classList, doseList, ageOption } = this.state;

    if(selectedOption){ 
        return (
            <div>
                <Form.Row>
                    <Col></Col>
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form.Group controlId="formModelType">
                            <Form.Label>Select Model Type</Form.Label>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Form.Group>
                    </Col>
                    <Col></Col>
                </Form.Row>
                <div>
                    <Form.Row>
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <Form.Group controlId="formNuclide">
                                <Form.Label>Select Nuclide</Form.Label>
                                <Select 
                                    placeholder="Nuclide"
                                    value={nuclideOption}
                                    onChange={this.nuclideChange}
                                    //onClick={this.nuclideChange}
                                    options={nuclides}    
                                />
                            </Form.Group>
                            {nuclideOption  && classList.length > 0 
                            ? <div>
                                    <Form.Label>Lung Class</Form.Label>
                                    <Form.Group>
                                        {this.state.classInputs}
                                    </Form.Group>
                                </div>
                            : nuclideOption && nuclideOption.hasOwnProperty('value') ?
                                <div style={{fontSize: 14, color: "red"}}>
                                    Nuclide dose data not yet loaded, reselect nuclide.
                                </div>
                            : null}
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <Form.Group controlId="formSourceAmount">
                                <Form.Label>Source Amount</Form.Label>
                                    <Form.Control
                                            type="number" step ="0.0001" placeholder="Source Amount"
                                            onChange={this.sourceAmountChange.bind(this)}
                                        />
                                {nuclideOption && classList.length > 0 ?
                                    <div>
                                        <br></br>
                                    <Form.Label>Age (Days)</Form.Label> 
                                    <Select 
                                        placeholder="Select Age"
                                        value={ageOption}
                                        onChange={this.ageChange}
                                        options={doseList}    
                                    />
                                    </div>
                                    : null //console.log('no dose information')
                                }
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <Form.Group controlId="formSourceUnits">
                                <Form.Label>Radioactivity Units</Form.Label>
                                <Select 
                                    placeholder="Units"
                                    value={sourceUnits}
                                    onChange={this.sourceUnitsChange}
                                    options={sourceUnitsOptions}    
                                />
                            </Form.Group>
                        </Col>
                        {/*Shows input for Release Height if General Plume is slected*/}
                        {selectedOption.value === "General_Plume" &&
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <Form.Group controlId="formReleaseHeight">
                                    <Form.Label>Release Height</Form.Label>
                                    <Form.Control
                                        type="number" step ="0.0001" placeholder="Release Height"
                                        onChange={this.releaseHeightChange.bind(this)}
                                    />
                                </Form.Group>
                            </Col>}
                        {/*Shows input for Fire Cloud Height and Fire Radius if General Fire is slected*/}
                        {selectedOption.value === "General_Fire" &&
                            <Col xs={12} sm={4} md={4} lg={2}>
                                <Form.Group controlId="formFireCloudHeight">
                                    <Form.Label>Fire Cloud Height</Form.Label>
                                    <Form.Control
                                        type="number" step ="0.0001" placeholder="Fire Cloud Height"
                                        onChange={this.fireCloudTopChange.bind(this)}
                                        />
                                </Form.Group>
                            </Col>}
                        {selectedOption.value === "General_Fire" &&
                            <Col xs={12} sm={4} md={4} lg={2}>
                                <Form.Group controlId="formFireRadius">
                                    <Form.Label>Fire Radius</Form.Label>
                                    <Form.Control
                                        type="number" step ="0.0001" placeholder="Fire Radius"
                                        onChange={this.fireRadiusChange.bind(this)}
                                        />
                                </Form.Group>
                            </Col>}
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <Form.Group controlId="formDistanceUnits">
                                <Form.Label>Distance Units</Form.Label>
                                <Select 
                                    placeholder="Units"
                                    value={distanceUnits}
                                    onChange={this.distanceUnitsChange}
                                    options={distanceUnitsOptions}    
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </div>
            </div>
        );
        } else {
            return (
                <div>
                    <p> HotSpot Model: </p>
                    <Form.Row>
                        <Col>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Form.Row>
                    <br></br>
                </div>

            );
        }
    }
}

export default Model;