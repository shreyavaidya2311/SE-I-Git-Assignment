import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { Button } from "reactstrap";

export class Header extends Component {
  state = {
    total: [],
  };

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/all?yesterday=false")
      .then((res) => this.setState({ total: res.data }));
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-1 justify-content-between">
          <a class="nav-item nav-link">
            ACTIVE CASES: {this.state.total.active}
          </a>
          <a class="nav-item nav-link">
            RECOVERED CASES: {this.state.total.recovered}
          </a>
          <a class="nav-item nav-link">DEATHS: {this.state.total.deaths}</a>
          <div align="right">
            <form class="form-inline my-2 my-lg-0">
              <Button color="danger" style={{ marginRight: "1em" }}>
                <a
                  href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                  className="link"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  <i class="fas fa-virus"></i> More about Covid-19
                </a>
              </Button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
