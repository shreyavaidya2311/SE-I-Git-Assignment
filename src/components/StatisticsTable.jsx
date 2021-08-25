import React, { Component } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

class SimpleTable extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get("https://www.trackcorona.live/api/countries")
      .then((res) => this.setState({ countries: res.data.data }));
  }

  render() {
    const columns = ["Country", "Confirmed", "Recovered", "Dead"];
    const data = this.state.countries.map((countries) => [
      countries.location,
      countries.confirmed,
      countries.recovered,
      countries.dead,
    ]);
    const options = {
      selectableRows: false,
      rowsPerPage: 8,
      rowsPerPageOptions: [4, 8],
    };

    return (
      <MUIDataTable
        title={"COVID 19 Statistics"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default SimpleTable;