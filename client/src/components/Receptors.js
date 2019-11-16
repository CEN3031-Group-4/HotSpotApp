import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';

const intervals = [
    { value: '0.5', label: '0.5' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: 'C', label: 'Custom' }
];

//const intervalQty = 0;

class Receptors extends React.Component {
    state = {
        selectedInterval: null,
        intervalQty: 0
      };
      intervalChange = selectedInterval => {
        this.setState(
          { selectedInterval },
            () => {
               console.log(`Interval selected:`, this.state.selectedInterval);
               this.makeinputs();
            }
        );
      };

      intervalQtyChange(e) {
        this.setState(
            { intervalQty: e.target.value },
              () => {
                 console.log(`Interval selected:`, this.state.intervalQty);
                 this.makeinputs();
              }
          );
        this.props.intervalQtyUpdate(e.target.value);
      }

      inputsChange(e) {
        this.setState(
            { receptorDistance: e.target.value },
              () => {
                 //console.log(`Receptor Distance:`, this.state.receptorDistance);
              }
          );
          //console.log(`id:`, e.target.id);
        this.props.receptorDistanceUpdate(e.target);
      }

      makeinputs(){
        //var inputs = '<Form.Row>';
        if(this.state.selectedInterval){
           if(this.state.selectedInterval.value === "C" && this.state.intervalQty > 0){
               console.log("Make some inputs:");
                var i, test = [],count,icount=1;
                var rows = this.state.intervalQty / 5;
                var remainder = this.state.intervalQty % 5;
                for(i = 0; i < rows; i++){
                    var columns = [];
                    if(i > rows - 1){
                        for(count=0;count < remainder; count++){
                            columns.push(
                                <Col key={'c'+(i+1) +'-'+ (count+1)}>
                                    <Form.Control 
                                    key={(i+1) +'-'+ (count+1)} 
                                    id={(i+1) +'-'+ (count+1)} 
                                    type="number" 
                                    onChange={this.inputsChange.bind(this)}
                                    placeholder={'Table Output: '+icount}/>
                                </Col>);
                                icount++;
                        }
                        for(count=0;count < 5 - remainder; count++){
                            columns.push(<Col key={'cn'+(i+1) +'-'+ (count+1)}></Col>);
                        }
                    }
                    else{
                        for(count=0;count < 5; count++){
                            columns.push(
                            <Col key={'c'+(i+1) +'-'+ (count+1)}>
                                <Form.Control 
                                key={(i+1) +'-'+ (count+1)} 
                                id={(i+1) +'-'+ (count+1)} 
                                type="number" 
                                onChange={this.inputsChange.bind(this)}
                                placeholder={'Table Output: '+icount}/>
                            </Col>);
                            icount++;
                        }
                    }
                    
                    test.push(<Form.Row key={'r'+(i+1)}>{columns}</Form.Row>);
                }
           }
           else{
               test = [];
           }
           //console.log(inputs);
           this.setState({inputs: test});
       }
      }

    render() {
        const { selectedInterval } = this.state;

        return (
            <div>
            <br></br>
            <Form.Row>
                <Col>
                </Col>
                <Col>
                    <Select 
                        placeholder="Select X Interval"
                        value={selectedInterval}
                        onChange={this.intervalChange}
                        options={intervals}    
                    />
                </Col>
                <Col>
                </Col>
                <Col>
                    <Form.Control
                        type="number" placeholder="Number of Receptors"
                        onChange={this.intervalQtyChange.bind(this)}
                        />
                </Col>
                <Col>
                </Col>
            </Form.Row>
            <Form.Group>{this.state.inputs}</Form.Group>
        </div>
        );
    }
}

export default Receptors