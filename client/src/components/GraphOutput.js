import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphOutput extends React.Component {
    render() {
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Radioactivity Concentration by Distance From Source"
			},
			axisY: {
				title: "Radioactivity Concentration (Ci-s/m^3)",
				includeZero: false
			},
			axisX: {
                title: "Distance from Source in the x-axis (meters)",
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