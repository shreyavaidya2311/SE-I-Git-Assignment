import { Grid } from "@material-ui/core";
import "./App.css";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Covid19 Tracker</h1>
      <Grid container justify="center">
        <Grid item>
          <PieChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
