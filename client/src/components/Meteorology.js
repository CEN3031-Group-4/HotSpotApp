import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';

const options = [
    { value: 'A', label: 'A - Very Unstable' },
    { value: 'B', label: 'B - Moderately Unstable' },
    { value: 'C', label: 'C - Slightly Unstable' },
    { value: 'D', label: 'D - Neutral' },
    { value: 'E', label: 'E - Slightly Stable' },
    { value: 'F', label: 'F - Moderately Stable' },
    { value: 'G', label: 'G - Special Night-time (Low Wind)' }
];

const speedUnitsOptions = [
  { value: 'm/s', label: 'Meters/Second (m/s)' },
  { value: 'mph', label: 'Miles Per Hour (mph)' }
];

class Meteorology extends React.Component {
  state = {
    selectedOption: null,
    speedUnits: null
  };
  stabilityChange = selectedOption => {
    this.setState(
      { selectedOption },
        () => {
           console.log(`Option selected:`, this.state.selectedOption);
           this.props.stableValueUpdate(this.state.selectedOption.value);
        }
    );
  };

  windSpeedChange(e) {
    this.props.windSpeedUpdate(e.target.value);
  }

  speedUnitsChange = speedUnits => {
    this.setState(
      { speedUnits },
       () => {
           console.log(`Option selected:`, this.state.speedUnits);
           this.props.speedUnitsUpdate(this.state.speedUnits.value);
       }
    );
  };

  render() {
    const { selectedOption, speedUnits } = this.state;

    return (
        <div>
            <Form.Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <Form.Group controlId="basicWindSpeed">
                        <Form.Label>Wind Speed</Form.Label>
                        <Form.Control
                            type="number" step="0.1" placeholder="Wind Speed"
                            onChange={this.windSpeedChange.bind(this)}
                            />
                    </Form.Group> 
                </Col>
                <Col xs={12} sm={4} md={4} lg={2}>
                    <Form.Group controlId="formSourceUnits">
                        <Form.Label>Speed Units</Form.Label>
                        <Select 
                            placeholder="Units"
                            value={speedUnits}
                            onChange={this.speedUnitsChange}
                            options={speedUnitsOptions}    
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                    <Form.Group controlId="basicStableOption">
                        <Form.Label>Stability Class</Form.Label>
                        <Select 
                            placeholder="A - Very Unstable"
                            value={selectedOption}
                            onChange={this.stabilityChange}
                            options={options}    
                            />
                    </Form.Group>
                </Col>
            </Form.Row>
        </div>
    );
  }
}

export default Meteorology;