import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Col} from 'react-bootstrap';

class TableOutput extends React.Component {
    render() {
        const { tableOutput } = this.props;
        const receptorList = tableOutput.map((output) =>
            <tr key={output.x}>
                <td>{output.x} {this.props.receptorUnits}</td>
                <td>{output.concentration} {this.props.sourceUnits}-s/{this.props.distanceUnits}<sup>3</sup></td>
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
                    <li>Model Type: {this.props.modelType}</li>
                    <li>Selected Nuclide: N/A</li>
                    <li>Source Amount: {this.props.sourceAmount} {this.props.sourceUnits}</li>
                    {this.props.modelType === "General_Plume" &&
                    <li>Release Height: {this.props.releaseHeight} {this.props.distanceUnits}</li>}
                    {this.props.modelType === "General_Fire" &&
                    <li>Fire Cloud Height: {this.props.fireCloudTop} {this.props.distanceUnits}</li>}
                    {this.props.modelType === "General_Fire" &&
                    <li>Fire Radius: {this.props.fireRadius} {this.props.distanceUnits}</li>}
                    <li>Wind Speed: {this.props.windSpeed} {this.props.speedUnits}</li>
                    <li>Stability Value: {this.props.stableValue}</li>
                    <li>Receptor Height: {this.props.receptorHeight} {this.props.receptorUnits}</li>
                    <br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Receptor Distance</td>
                                <td>Concentration</td>
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