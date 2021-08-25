import React, { Component } from "react";
import axios from "axios";
import { Col, Card, CardBody } from "reactstrap";

import { Doughnut } from "react-chartjs-2";

export class DoughnutChart extends Component {
  state = {
    labels: ["Total Active", "Total Recovered", "Total Dead"],
    totalData: [
      {
        data: [],
        backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"],
        label: "COVID-19 Statistics",
      },
    ],
  };

  componentDidMount() {
    var totData = [];
    axios
      .get("https://corona.lmao.ninja/v2/all?yesterday=false")
      .then((res) => processData(res.data));

    const processData = (data) => {
      totData.push(data.active);
      totData.push(data.recovered);
      totData.push(data.deaths);

      let totArray = [...this.state.totalData];
      totArray[0] = { ...totArray[0], data: totData };
      this.setState({ totalData: totArray });
    };
  }

  render() {
    return (
      <Col>
        <Card style={{ height: "20em", width: "20em", margin: "2em" }}>
          <CardBody>
            <Doughnut
              data={{
                labels: this.state.labels,
                datasets: this.state.totalData,
              }}
              options={{
                tooltips: {
                  callbacks: {
                    title: function (tooltipItem, data) {
                      return data.labels[tooltipItem[0].index];
                    },
                    label: function (tooltipItem, data) {
                      var label = data.datasets[tooltipItem.datasetIndex].label;
                      var tooltipValue =
                        data.datasets[tooltipItem.datasetIndex].data[
                          tooltipItem.index
                        ];
                      return label, parseInt(tooltipValue).toLocaleString();
                    },
                  },
                },
              }}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default DoughnutChart;
