import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphOutput extends React.Component {
    render() {
		const { outputSourceUnits, graphReceptorUnits } = this.props;
		let yaxisTitle = `Radioactivity Concentration (` + outputSourceUnits + `-s/m^3)`;
		let xaxisTitle = `Distance from Source in the x-axis (` + graphReceptorUnits + `)`;
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Radioactivity Concentration by Distance From Source"
			},
			axisY: {
				title: yaxisTitle,
				includeZero: false
			},
			axisX: {
                title: xaxisTitle,
                logarithmic: true
			},
			data: [{
				type: "spline",
				dataPoints: this.props.graphOutput
			}]
		}
        return (
            <div>
                {this.props.isSubmitted &&
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />}
                {/*You can get reference to the chart instance as shown above using onRef.
                This allows you to access all chart properties and methods*/}
            </div>
        )
    }
}

export default GraphOutput;