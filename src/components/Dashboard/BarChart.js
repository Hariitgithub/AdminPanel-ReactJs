import React, { Component } from 'react'
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70]
        }
      ]
    };
  }
  render() {
    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="1000"
                height="400"
                barWidth="60"
              />
            </div>
          </div>
        </div>
    )
  }
}

export default BarChart