import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';

class Output extends React.Component {
    render() {
        const { receptDist, concentration } = this.props;
        const receptorList = receptDist.map((distance) =>
            <tr>
                <td>{distance} {this.props.distanceUnits}</td>
            </tr>
        );
        //console.log(`Output receptors: `, receptDist);
        const concentrationList = concentration.map((concentrate) =>
            <tr>
                <td>{concentrate} {this.props.sourceUnits}-s/{this.props.distanceUnits}<sup>3</sup></td>
            </tr>
        );
        //console.log(`Output concentration: `, concentration);
        return (
            <div>
                <Col>
                    <h3>Selected Values:</h3>
                    <p>
                        Model Type: {this.props.modelType}<br />
                        Selected Nuclide: N/A<br />
                        Source Amount: {this.props.sourceAmount} {this.props.sourceUnits}<br />
                        Release Height: {this.props.releaseHeight} {this.props.distanceUnits}<br />
                        Wind Speed: {this.props.windSpeed} {this.props.speedUnits}<br />
                        Stability Value: {this.props.stableValue}<br />
                        Receptor Height: {this.props.receptorHeight} {this.props.receptorUnits}<br />
                    </p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Receptor Distance</td>
                                <td>Concentration</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <table>
                                        <tbody>
                                            {receptorList}
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <tbody>
                                            {concentrationList}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col>
                </Col>
            </div>
        );
    }
}

export default Output;