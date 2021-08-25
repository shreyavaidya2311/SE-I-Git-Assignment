import React, { Component } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

class SimpleTable extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((res) => {
      this.setState({ countries: res.data.Countries });
    });
  }

  render() {
    const columns = ["Country", "Confirmed", "Dead"];
    const data = this.state.countries.map((countries) => [
      countries.Country,
      countries.TotalConfirmed,
      countries.TotalDeaths,
    ]);
    const options = {
      selectableRows: false,
      rowsPerPage: 8,
      rowsPerPageOptions: [4, 8],
    };

    return (
      <div style={{ margin: "2em" }}>
        <MUIDataTable
          title={"COVID 19 Statistics"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default SimpleTable;
