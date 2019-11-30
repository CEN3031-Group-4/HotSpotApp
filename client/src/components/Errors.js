import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';

class Errors extends React.Component {
    render() {
      return (
        <div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.sourceAmountErr}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.fireCloudTopErr}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.fireRadiusErr}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.releaseHeightErr}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.WindSpeedErr}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.intervalQtyErr}
            </div>  
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.receptorHeightErr}
            </div> 
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.blankError}
            </div>
            <div style={{fontSize: 14, color: "red"}}>
                {this.props.receptorFieldErr}
            </div>
        </div>
      );
    }
  }
  
  export default Errors;