import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Col} from 'react-bootstrap';

class TableOutput extends React.Component {
    render() {
        const { tableOutput } = this.props;
        const receptorList = tableOutput.map((output) =>
            <tr key={output.x}>
                <td>{output.x} {this.props.outputReceptorUnits}</td>
                <td>{output.decayAdjConc.toExponential(3)} {this.props.outputSourceUnits}-s/{this.props.graphDistanceUnits}<sup>3</sup></td>
                <td>{output.totalDose.toExponential(3)} mrem???</td>
                <td>{output.arrival.toFixed(1)} s</td>
            </tr>
        );
        //console.log(`Output receptors: `, receptDist);
        /*const concentrationList = concentration.map((concentrate, index) =>
            <tr key={index}>
                <td>{concentrate} {this.props.sourceUnits}-s/{this.props.distanceUnits}<sup>3</sup></td>
            </tr>
        );*/
        //console.log(`Output concentration: `, concentration);
        return (
            <div>
                {this.props.isSubmitted &&
                <div>
                    <h3>Selected Values:</h3>
                    <li>Model Type: {this.props.outputModelType}</li>
                    <li>Selected Nuclide: {this.props.outputNuclideOption}</li>
                    <li>Half-life: {this.props.outputHalfLife} s</li>
                    <li>Decay Constant: {this.props.outputDecayConstant.toExponential(4)} s<sup>-1</sup></li>
                    <li>Lung Class: {this.props.outputClassOption}</li>
                    <li>Age Option: {this.props.outputAgeOption} days</li>
                    <li>Effective Dose: {this.props.outputEffectiveDose.toExponential()}</li>
                    <li>Source Amount: {parseFloat(this.props.outputSourceAmount).toExponential()} {this.props.outputSourceUnits}</li>
                    {this.props.outputModelType === "General_Plume" &&
                    <li>Release Height: {this.props.outputReleaseHeight} {this.props.outputDistanceUnits}</li>}
                    {this.props.outputModelType === "General_Fire" &&
                    <li>Fire Cloud Height: {this.props.outputFireCloudTop} {this.props.outputDistanceUnits}</li>}
                    {this.props.outputModelType === "General_Fire" &&
                    <li>Fire Radius: {this.props.outputFireRadius} {this.props.outputDistanceUnits}</li>}
                    <li>Wind Speed: {this.props.outputWindSpeed} {this.props.outputSpeedUnits}</li>
                    <li>Stability Value: {this.props.outputStableValue}</li>
                    <li>Receptor Height: {this.props.outputReceptorHeight} {this.props.outputDistanceUnits}</li>
                    <br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Receptor Distance</td>
                                <td>Decay Adjusted Concentration</td>
                                <td>Total Dose</td>
                                <td>Arrival Time</td>
                                </tr>
                        </thead>
                        <tbody>
                            {receptorList}
                        </tbody>
                    </table>
                </div>}
            </div>
        );
    }
}

export default TableOutput;