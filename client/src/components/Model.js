import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';
import Nuclides from '../assets/nuclides';

const options = [
    { value: 'General_Plume', label: 'General Plume' },
    { value: 'General_Fire', label: 'General Fire' }
];

const sourceUnitsOptions = [
    { value: 'Ci', label: 'Curies (Ci)' },
    { value: 'Bq', label: 'Becquerel (Bq)' }
];

const distanceUnitsOptions = [
    { value: 'm', label: 'Meters (m)' },
    { value: 'ft', label: 'Feet (ft)' }
];

const nuclides = Nuclides;

class Model extends React.Component {

  state = {
    selectedOption: { value: 'General_Plume', label: 'General Plume' },
    sourceUnits: null,
    distanceUnits: null,
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
    const { selectedOption, sourceUnits, distanceUnits, nuclideOption } = this.state;

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
                                    type="number" placeholder="Source Amount"
                                    onChange={this.sourceAmountChange.bind(this)}
                                />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={sourceUnits}
                                    onChange={this.sourceUnitsChange}
                                    options={sourceUnitsOptions}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Release Height"
                                    onChange={this.releaseHeightChange.bind(this)}
                                />
                            </Col>
                            <Col></Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={distanceUnits}
                                    onChange={this.distanceUnitsChange}
                                    options={distanceUnitsOptions}    
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
                                    type="number" placeholder="Source Amount"
                                    onChange={this.sourceAmountChange.bind(this)}
                                    />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={sourceUnits}
                                    onChange={this.sourceUnitsChange}
                                    options={sourceUnitsOptions}    
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Fire Cloud Height"
                                    onChange={this.fireCloudTopChange.bind(this)}
                                    />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number" placeholder="Fire Radius"
                                    onChange={this.fireRadiusChange.bind(this)}
                                    />   
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={distanceUnits}
                                    onChange={this.distanceUnitsChange}
                                    options={distanceUnitsOptions}
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