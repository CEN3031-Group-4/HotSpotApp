import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';


const options = [
    { value: 'General_Plume', label: 'General Plume' },
    { value: 'General_Fire', label: 'General Fire' }
];

const units = [
    { value: 'm', label: 'Meters (m)' },
    { value: 'ft', label: 'Feet (ft)' }
];

const nuclides = [
    { value: 'tbd', label: 'Nuclide Source' }
];

class Model extends React.Component {
  state = {
    selectedOption: { value: 'General_Plume', label: 'General Plume' },
    unitOption: null,
    nuclideOption: null
  };
  modelChange = selectedOption => {
    this.setState(
      { selectedOption },
       () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  unitChange = unitOption => {
    this.setState(
      { unitOption },
       () => console.log(`Option selected:`, this.state.unitOption)
    );
  };

  nuclideChange = nuclideOption => {
    this.setState(
      { nuclideOption },
       () => console.log(`Option selected:`, this.state.nuclideOption)
    );
  };

  render() {
    const { selectedOption, unitOption, nuclideOption } = this.state;

    if(selectedOption){
        if(selectedOption.value === "General_Plume"){
            return (
                <div>
                    <Form.Row>
                        <Col>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Col>
                    </Form.Row>
                    <br></br>
                    <div>
                        <Form.Row>
                            <Col>
                                <Form.Control type="number" placeholder="Source Amount" />
                            </Col>
                            <Col>
                                <Form.Control type="number" placeholder="Height" />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unitOption}
                                    onChange={this.unitChange}
                                    options={units}    
                                />
                            </Col>
                            <Col></Col>
                            <Col>
                                <Select 
                                    placeholder="Nuclide"
                                    value={nuclideOption}
                                    onChange={this.nuclideChange}
                                    options={nuclides}    
                                />
                            </Col>
                        </Form.Row>
                    </div>
                </div>
            );
        }if(selectedOption.value === "General_Fire"){
            return (
                <div>
                    <Form.Row>
                        <Col>
                            <Select
                                value={selectedOption}
                                onChange={this.modelChange}
                                options={options}
                            />
                        </Col>
                    </Form.Row>
                    <br></br>
                    <div>
                        <Form.Row>
                            <Col>
                                <Form.Control type="number" placeholder="Source Amount" />
                            </Col>
                            <Col>
                                <Form.Control type="number" placeholder="Height" />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Units"
                                    value={unitOption}
                                    onChange={this.unitChange}
                                    options={units}    
                                />
                            </Col>
                            <Col>
                                <Form.Control type="number" placeholder="Fire Radius" />
                                <Form.Control type="number" placeholder="Fire Cloud Height" />
                            </Col>
                            <Col>
                                <Select 
                                    placeholder="Nuclide"
                                    value={nuclideOption}
                                    onChange={this.nuclideChange}
                                    options={nuclides}    
                                />
                            </Col>
                        </Form.Row>
                        </div>
                </div>
            );
        }
    }else{
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