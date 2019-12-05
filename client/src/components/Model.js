import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';
import {nuclides as Nuclides, lungClass} from '../assets/nuclides';

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
const nuclideClasses = lungClass;

class Model extends React.Component {

  state = {
    selectedOption: { value: 'General_Plume', label: 'General Plume' },
    sourceUnits: { value: 'Ci', label: 'Ci (Curies)' },
    distanceUnits: { value: 'm', label: 'm (meters)' },
    nuclideOption: null,
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
       () => console.log(`Option selected:`, this.state.nuclideOption)
    );    
  };

  sourceAmountChange(e) {
    this.props.sourceAmountUpdate(e.target.value);
  }

  ageChange = ageOption => {
    this.setState(
        { ageOption },
         () => console.log(`Option selected:`, this.state.ageOption.value)
      );
    this.props.ageUpdate(ageOption.value);
  }

  classSelect(e) {
    if(e.target.id !== 'ICRP' && !document.getElementById('ICRP').checked){
        this.props.classUpdate(e.target.id);
        //console.log("Doses: ", lungClass[this.state.nuclideOption.value][e.target.id]["dose"]);
        if(e.target.id && this.state.nuclideOption.hasOwnProperty('value') && lungClass[this.state.nuclideOption.value].hasOwnProperty(e.target.id)){
            console.log(this.state.nuclideOption.value, " ", e.target.id, " Lung Class: ", lungClass[this.state.nuclideOption.value][e.target.id]["dose"]);
            const classes = lungClass[this.state.nuclideOption.value][e.target.id]["dose"];
            this.setState({nuclideClasses:classes});
        }
        else{
            this.setState({nuclideClasses: []});
        }
    }
    else{
        //get the ICRP lungClass value and dose, 
        //get request from /api/nuclides/icrp will need to:
        //split nuclideOption on - and take [0] to pass to find{nuclide:''}
        this.setState({nuclideClasses: []});
        if(document.getElementById('ICRP').checked){
            //uncheck
            document.getElementById("F").checked = false;
            document.getElementById("M").checked = false;
            document.getElementById("S").checked = false;
            document.getElementById("G").checked = false;
            //disable
            document.getElementById("F").disabled = true;
            document.getElementById("M").disabled = true;
            document.getElementById("S").disabled = true;
            document.getElementById("G").disabled = true;
        }
        else{
            document.getElementById("F").removeAttribute('disabled');
            document.getElementById("M").removeAttribute('disabled');
            document.getElementById("S").removeAttribute('disabled');
            document.getElementById("G").removeAttribute('disabled');
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
    const { selectedOption, sourceUnits, distanceUnits, nuclideOption, nuclideClasses, sourceOption, classOption, ageOption } = this.state;

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
                                    options={nuclides}    
                                />
                            </Form.Group>
                            {nuclideOption ? 
                                <div>
                                    <Form.Label>Lung Class</Form.Label>
                                    <Form.Group>
                                    <Form.Check inline name='lClass' type={'radio'} id={`F`} label={`F`} value={classOption} onClick={this.classSelect.bind(this)}/>
                                    <Form.Check inline name='lClass' type={'radio'} id={`M`} label={`M`} value={classOption} onClick={this.classSelect.bind(this)}/>
                                    <Form.Check inline name='lClass' type={'radio'} id={`S`} label={`S`} value={classOption} onClick={this.classSelect.bind(this)}/>
                                    <Form.Check inline name='lClass' type={'radio'} id={`G`} label={`G`} value={classOption} onClick={this.classSelect.bind(this)}/>
                                    <Form.Check inline name='lClass' type={'checkbox'} id={`ICRP`} label={`ICRP`} value={classOption} onClick={this.classSelect.bind(this)}/>
                                    </Form.Group>
                                </div>: null}
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <Form.Group controlId="formSourceAmount">
                                <Form.Label>Source Amount</Form.Label>
                                    <Form.Control
                                            type="number" step ="0.0001" placeholder="Source Amount"
                                            onChange={this.sourceAmountChange.bind(this)}
                                        />
                                {nuclideOption !== null && nuclideOption.hasOwnProperty('value') 
                                    ?
                                    <div>
                                        <br></br>
                                    <Form.Label>Age</Form.Label> 
                                    <Select 
                                        placeholder="Select Age"
                                        value={ageOption}
                                        onChange={this.ageChange}
                                        options={nuclideClasses}    
                                    />
                                    </div>
                                    : console.log('no dose information')
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