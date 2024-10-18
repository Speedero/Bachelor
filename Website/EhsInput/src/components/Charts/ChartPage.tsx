import "../../styles/app.css";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import Sidebar from "../Sidebar";
import HealthCharts from "./HealthCharts";
import SafetyCharts from "./SafetyCharts";
import EnergyCharts from "./EnergyCharts";
import WasteCharts from "./WasteCharts";
import MaterialCharts from "./MaterialCharts";
import OverviewCharts from "./OverviewCharts";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function ChartPage() {
  

  var GetURLParameter = (sParam: string) => {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] == sParam) {
        return sParameterName[1].replace("%20", " ");
      }
    }
  };

  const selectTopic = () => {
    const topic = GetURLParameter("topic");
    switch (topic) {
      case "overview":
        return <OverviewCharts/>
      case "health":
        return <HealthCharts/>
      case "safety":
        return <SafetyCharts/> 
      case "energy":
        return <EnergyCharts/>
      case "material":
        return <MaterialCharts/>
      case "waste":
        return <WasteCharts/>
      default:
        return <OverviewCharts/>
    }
  }

  return (
    <div id="mainpage">
      <Sidebar
        inputOpen={false}
        chartOpen={true}
        manageOpen={false}
        activeSection=""
      />

      <div className="ms-3 chartpagediv">
        <h1 className="mt-2">CHART</h1>

        {selectTopic()}

        <div className="mt-3 d-flex align-items-center">
          <h3 className="me-3">Werk vergleichen:</h3>
          <div className="d-inline-block width10">
            <select
              id="selWerk1"
              className="form-select"
              aria-label="Default select example"
              defaultValue={""}
            >
              <option>Test</option>
            </select>
          </div>
          <div className="d-inline-block width10 ms-4">
            <select
              id="selWerk2"
              className="form-select"
              aria-label="Default select example"
              defaultValue={""}
            >
              <option>Test</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
