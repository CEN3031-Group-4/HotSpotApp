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
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={2}>
                                <Form.Group controlId="formSourceAmount">
                                    <Form.Label>Source Amount</Form.Label>
                                    <Form.Control
                                        type="number" placeholder="Source Amount"
                                        onChange={this.sourceAmountChange.bind(this)}
                                    />
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
                            <Col></Col>
                            <Col xs={12} sm={4} md={4} lg={2}>
                                <Form.Group controlId="formReleaseHeight">
                                    <Form.Label>Release Height</Form.Label>
                                    <Form.Control
                                        type="number" placeholder="Release Height"
                                        onChange={this.releaseHeightChange.bind(this)}
                                    />
                                </Form.Group>
                            </Col>
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
        } if (selectedOption.value === "General_Fire") {
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
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={2}>
                                    <Form.Group controlId="formSourceAmount">
                                        <Form.Label>Source Amount</Form.Label>
                                        <Form.Control
                                            type="number" placeholder="Source Amount"
                                            onChange={this.sourceAmountChange.bind(this)}
                                        />
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
                                <Col xs={12} sm={4} md={4} lg={2}>
                                    <Form.Group controlId="formFireCloudHeight">
                                        <Form.Label>Fire Cloud Height</Form.Label>
                                        <Form.Control
                                            type="number" placeholder="Fire Cloud Height"
                                            onChange={this.fireCloudTopChange.bind(this)}
                                            />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={4} md={4} lg={2}>
                                    <Form.Group controlId="formFireCloudHeight">
                                        <Form.Label>Fire Cloud Height</Form.Label>
                                        <Form.Control
                                            type="number" placeholder="Fire Radius"
                                            onChange={this.fireRadiusChange.bind(this)}
                                            />
                                    </Form.Group>
                                </Col>
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