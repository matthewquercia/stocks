import React from 'react'
import Chart from "chart.js";
let myLineChart;

class QuarterlyEarnings extends React.Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate(){
        this.buildChart();
    }

    buildChart = () => {
        var myChartRef = this.chartRef.current.getContext("2d");
        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["4Q2019", "1Q2020", "2Q2020","3Q2020"],
                datasets: [
                    {
                        label: "Quarterly Earnings",
                        data: [this.props.data[0].actual.fmt, this.props.data[1].actual.fmt, this.props.data[2].actual.fmt, this.props.data[3].actual.fmt],
                        backgroundColor: [
                            'rgba(62, 97, 193, 1)'
                        ]
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default QuarterlyEarnings;