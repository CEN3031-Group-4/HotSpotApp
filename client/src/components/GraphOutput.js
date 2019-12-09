import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//See canvasjs.com for documentation on how to manipulate this graph
class GraphOutput extends React.Component {
    render() {
		const { graphReceptorUnits } = this.props;
		let yaxisTitle = `Total Dose (rem)`;
		let xaxisTitle = `Distance from Source in the x-axis (` + graphReceptorUnits + `)`;
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Total Dose by Distance From Source"
			},
			axisY: {
				valueFormatString: "0.0##e+0",
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