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

class Meteorology extends React.Component {
  state = {
    selectedOption: null
  };
  stabilityChange = selectedOption => {
    this.setState(
      { selectedOption },
       () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
        <div>
            <br></br>
            <Form.Row>
                <Col>
                    <Form.Control type="number" placeholder="Wind Speed" />
                </Col>
                <Col>
                    <Select 
                        placeholder="A - Very Unstable"
                        value={selectedOption}
                        onChange={this.stabilityChange}
                        options={options}    
                    />
                </Col>
            </Form.Row>
        </div>
    );
}
}

export default Meteorology;