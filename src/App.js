import { Grid } from "@material-ui/core";
import "./App.css";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import StatisticsTable from "./components/StatisticsTable";


function App() {
  return (
    <div className="App">
      <h1>Covid19 Tracker</h1>
      <Grid container justify="center">
        <Grid item>
          <PieChart />
        </Grid>
        <Grid item>
          <LineChart />
        </Grid>
        <Grid item>
          <StatisticsTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
