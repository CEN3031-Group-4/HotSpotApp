import React from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col} from 'react-bootstrap';

const intervals = [
    //{ value: '0.5', label: '0.5' },
    //{ value: '1', label: '1' },
    //{ value: '2', label: '2' },
    //{ value: '5', label: '5' },
    //{ value: '10', label: '10' },
    //{ value: '20', label: '20' },
    //{ value: '50', label: '50' },
    //{ value: '100', label: '100' },
    { value: 'S', label: 'Standard'},
    { value: 'C', label: 'Custom' }
];

const standardInterval = [0.03, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
                          1, 2, 4, 6, 8, 10, 20, 40, 60, 80
]

const receptorUnitsOptions = [
    { value: 'km', label: 'km (kilometers)' },
    { value: 'm', label: 'm (meters)' },
    { value: 'miles', label: 'miles' },
    { value: 'ft', label: 'ft (feet)' }
];

//const intervalQty = 0;

class Receptors extends React.Component {
    state = {
        selectedInterval: null,
        inputDisabled: false,
        inputPlaceholder: "Number of Receptors",
        intervalQty: 0,
        receptorUnits: { value: 'km', label: 'km (kilometers)' }
      };
      intervalChange = selectedInterval => {
        this.setState(
          { selectedInterval },
            () => {
               if (this.state.selectedInterval.value === 'S') {
                   this.setState({inputDisabled: true,
                                  inputPlaceholder: "20",
                                  intervalQty: 20},
                                  () => {
                                     this.makeinputs();
                                     console.log(`intervalQty in Receptors.js: `, this.state.intervalQty);
                                     this.props.intervalQtyUpdate(this.state.intervalQty);
                                    });
               }    
               else if (this.state.selectedInterval.value === 'C') {
                   this.setState({inputDisabled: false,
                                  inputPlaceholder: "Number of Receptors",
                                  intervalQty: 0},
                                  () => this.makeinputs());
               }
               console.log(`Interval selected:`, this.state.selectedInterval);
               //console.log(`Input Disabled: `, this.state.inputDisabled);
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
        //this.props.intervalQtyUpdate(e.target.value);
      }

      receptorHeightChange(e) {
        this.props.receptorHeightUpdate(e.target.value);
      }

      receptorUnitsChange = receptorUnits => {
        this.setState(
          { receptorUnits },
           () => {
               console.log(`Option selected:`, this.state.receptorUnits);
               this.props.receptorUnitsUpdate(this.state.receptorUnits.value);
           }
        );
      };

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
            if(this.state.selectedInterval.value === "S") {
                var i, test = [],count,icount=1;
                var rows = this.state.intervalQty / 6;
                var remainder = this.state.intervalQty % 6;
                for(i = 0; i < rows; i++){
                    var columns = [];
                    if(i > rows - 1){
                        for(count=0;count < remainder; count++){
                            columns.push(
                                <Col key={'c'+(i+1) +'-'+ (count+1)} xs={6} sm={4} md={2} lg={2}>
                                    <Form.Control
                                    className="receptor-control-input" 
                                    key={(i+1) +'-'+ (count+1)} 
                                    id={(i+1) +'-'+ (count+1)} 
                                    type="number"
                                    step="0.0001"
                                    disabled={true}
                                    placeholder={standardInterval[icount-1]}/>
                                </Col>);
                                icount++;
                        }
                        for(count=0;count < 6 - remainder; count++){
                            columns.push(<Col key={'cn'+(i+1) +'-'+ (count+1)}></Col>);
                        }
                    }
                    else{
                        for(count=0;count < 6; count++){
                            columns.push(
                            <Col key={'c'+(i+1) +'-'+ (count+1)} xs={6} sm={4} md={2} lg={2}>
                                <Form.Control
                                className="receptor-control-input" 
                                key={(i+1) +'-'+ (count+1)} 
                                id={(i+1) +'-'+ (count+1)} 
                                type="number"
                                step ="0.0001"
                                disabled={true}
                                placeholder={standardInterval[icount-1]}/>
                            </Col>);
                            icount++;
                        }
                    }
                    test.push(<Form.Row key={'r'+(i+1)}>{columns}</Form.Row>);
                }
            }
            else if(this.state.selectedInterval.value === "C" && this.state.intervalQty > 0){
                console.log("Make some inputs:");
                test = [];
                icount=1;
                rows = this.state.intervalQty / 6;
                remainder = this.state.intervalQty % 6;
                for(i = 0; i < rows; i++){
                    columns = [];
                    if(i > rows - 1){
                        for(count=0;count < remainder; count++){
                            columns.push(
                                <Col key={'c'+(i+1) +'-'+ (count+1)} xs={6} sm={4} md={2} lg={2}>
                                    <Form.Control
                                    className="receptor-control-input"
                                    key={(i+1) +'-'+ (count+1)} 
                                    id={(i+1) +'-'+ (count+1)} 
                                    type="number"
                                    step="0.0001"
                                    onChange={this.inputsChange.bind(this)}
                                    placeholder={'x-'+icount}/>
                                </Col>);
                                icount++;
                        }
                        for(count=0;count < 6 - remainder; count++){
                            columns.push(<Col key={'cn'+(i+1) +'-'+ (count+1)}></Col>);
                        }
                    }
                    else{
                        for(count=0;count < 6; count++){
                            columns.push(
                            <Col key={'c'+(i+1) +'-'+ (count+1)} xs={6} sm={4} md={2} lg={2}>
                                <Form.Control
                                className="receptor-control-input"
                                key={(i+1) +'-'+ (count+1)}
                                id={(i+1) +'-'+ (count+1)}
                                type="number"
                                step ="0.0001"
                                onChange={this.inputsChange.bind(this)}
                                placeholder={'x-'+icount}/>
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
        const { selectedInterval, receptorUnits } = this.state;

        return (
            <div>
                <Form.Row>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Form.Group>
                            <Form.Label>Select x-Receptor Interval</Form.Label>
                            <Select 
                                placeholder="Select X Interval"
                                value={selectedInterval}
                                onChange={this.intervalChange}
                                options={intervals}    
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Form.Group>
                            <Form.Label>No. of x-Receptor Inputs</Form.Label>
                            <Form.Control
                                type="number" placeholder={this.state.inputPlaceholder}
                                disabled={this.state.inputDisabled}
                                onChange={this.intervalQtyChange.bind(this)}
                                />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3}>
                        <Form.Group controlId="formReceptorUnits">
                            <Form.Label>x-Receptor Units</Form.Label>
                            <Select 
                                placeholder="Units"
                                value={receptorUnits}
                                onChange={this.receptorUnitsChange}
                                options={receptorUnitsOptions}    
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3}>
                        <Form.Group>
                            <Form.Label>z-Receptor Height</Form.Label>
                            <Form.Control
                                type="number" step ="0.0001" placeholder="Receptor Height"
                                onChange={this.receptorHeightChange.bind(this)}
                                />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group>{this.state.inputs}</Form.Group>
            </div>
        );
    }
}

export default Receptors