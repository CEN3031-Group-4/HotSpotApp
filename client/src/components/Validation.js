import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';

class Validation extends React.Component {
    state = {
      selectedOption: null
    };
  
    render() {
     
  
      return (
        <div>
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
            <div style={{fontSize: 14, color: "red"}}>
                {this.state.blankError}
            </div>
        </div>
      );
    }
  }
  
  export default Validation;