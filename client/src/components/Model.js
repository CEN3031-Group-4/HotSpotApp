import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';


const options = [
    { value: 'General_Plume', label: 'General Plume' },
    { value: 'General_Fire', label: 'General Fire' }
];

const units1 = [
    { value: 'Ci', label: 'Curies (Ci)' },
    { value: 'Bq', label: 'Becquerel (Bq)' }
];

const units2 = [
    { value: 'm', label: 'Meters (m)' },
    { value: 'ft', label: 'Feet (ft)' }
];

const nuclides = [
    { value: 'tbd', label: 'Nuclide Source' }
];

class Model extends React.Component {

  state = {
    selectedOption: { value: 'General_Plume', label: 'General Plume' },
    unit1Option: null,
    unit2Option: null,
    nuclideOption: null
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

  unit1Change = unit1Option => {
    this.setState(
      { unit1Option },
       () => console.log(`Option selected:`, this.state.unit1Option)
    );
  };

  unit2Change = unit2Option => {
    this.setState(
      { unit2Option },
       () => console.log(`Option selected:`, this.state.unit2Option)
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
    const { selectedOption, unit1Option, unit2Option, nuclideOption } = this.state;

    if(selectedOption){ 
        if(selectedOption.value === "General_Plume") {
            return (
                <div>
                    <Form.Row>
                        <Col></Col>
                        <Col>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Col>
                        <Col></Col>
                    </Form.Row>
                    <br></br>
                    <div>
                        <Form.Row>
                            <Col>
                                <Select 
                                    placeholder="Nuclide"
                                    value={nuclideOption}
                                    onChange={this.nuclideChange}
                                    options={nuclides}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" 
                                    placeholder="Source Amount"
                                    onChange={this.sourceAmountChange.bind(this)}
                                />
                                <div>{this.props.sourceAmountErr}</div>
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unit1Option}
                                    onChange={this.unit1Change}
                                    options={units1}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Height"
                                    onChange={this.releaseHeightChange.bind(this)}
                                />
                            </Col>
                            <Col></Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unit2Option}
                                    onChange={this.unit2Change}
                                    options={units2}    
                                />
                            </Col>
                        </Form.Row>
                    </div>
                </div>
            );
        } if (selectedOption.value === "General_Fire") {
            return (
                <div>
                    <Form.Row>
                        <Col></Col>
                        <Col>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Col>
                        <Col></Col>
                    </Form.Row>
                    <br></br>
                    <div>
                        <Form.Row>
                            <Col>
                                <Select 
                                    placeholder="Nuclide"
                                    value={nuclideOption}
                                    onChange={this.nuclideChange}
                                    options={nuclides}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" 
                                    name="sourceAmount"
                                    placeholder="Source Amount"
                                    onChange={this.sourceAmountChange.bind(this)}
                                    />
                                    <div>{this.state.sourceAmountErr}</div>
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unit1Option}
                                    onChange={this.unit1Change}
                                    options={units1}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Height"
                                    onChange={this.releaseHeightChange.bind(this)}
                                    />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Fire Radius"
                                    onChange={this.fireRadiusChange.bind(this)}
                                    />
                                <Form.Control
                                    type="number" placeholder="Fire Cloud Height"
                                    onChange={this.fireCloudTopChange.bind(this)}
                                    />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unit2Option}
                                    onChange={this.unit2Change}
                                    options={units2}    
                                />
                            </Col>
                        </Form.Row>
                        </div>
                    </div>
                );
            }
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