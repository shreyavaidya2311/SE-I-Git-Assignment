import React, { Component } from "react";
import axios from "axios";
import { Col, Card, CardBody } from "reactstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export class WorldwideHistoricChart extends Component {
  state = {
    useData: null,
    historical: null,
    count: 90,
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/historical/all?lastdays=10")
      .then((res) => processData(res.data));
    const processData = (data) => {
      var historical = [];
      for (var i in data) {
        historical.push(data[i]);
      }

      var dates = Object.keys(historical[0]);
      var cases = Object.values(historical[0]);
      var deaths = Object.values(historical[1]);
      var recovered = Object.values(historical[2]);

      function Data(date, cases, deaths, recovered) {
        this.date = date;
        this.cases = cases;
        this.deaths = deaths;
        this.recovered = recovered;
      }

      var processedData = [
        new Data(dates[0], cases[0], deaths[0], recovered[0]),
      ];
      for (var k = 1; k <= dates.length - 1; k++) {
        processedData.push(
          new Data(
            dates[k],
            Math.abs(cases[k] - cases[k - 1]),
            Math.abs(deaths[k] - deaths[k - 1]),
            Math.abs(recovered[k] - recovered[k - 1])
          )
        );
      }

      this.setState({ historical: processedData });
      this.setState({
        useData: this.state.historical.slice(1, 91),
      });
      this.setState({ isLoaded: true });
    };
  }

  selectChange = (e) => {
    this.setState({
      useData: this.state.historical.slice(1, 91),
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ margin: "2em" }}>
          <CardBody>
            <LineChart width={500} height={300} data={this.state.useData}>
              <XAxis dataKey="date" />
              <CartesianGrid stroke="#eee" />
              <YAxis />
              <Legend />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#4e73df"
                dot={false}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="recovered"
                stroke="#1cc88a"
                dot={false}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="#e74a3b"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default WorldwideHistoricChart;
