import { useState } from "react";
import RotatingImage from "./RotatingImage";

interface InputProp {
  inputOpen: boolean;
  chartOpen: boolean;
  manageOpen: boolean;
  activeSection: string;
}

export default function Sidebar({
  inputOpen,
  chartOpen,
  manageOpen,
  activeSection,
}: InputProp) {
  const [inputVis, setInputVis] = useState(inputOpen);
  const [chartVis, setChartVis] = useState(chartOpen);
  const [managetVis, setManageVis] = useState(manageOpen);

  const toggleInput = () => {
    setInputVis(!inputVis);
  };
  const toggleChart = () => {
    setChartVis(!chartVis);
  };

  const toggleManage = () => {
    setManageVis(!managetVis);
  };

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

  const selectChartTopic = (name: string) => {
    const topic = GetURLParameter("topic");
    if (topic === name) return "active";
    return "";
  }


  return (
    <div id="mySidenav" className="sidenav">
      <img className="ms-3 logoSize" src="forboLogo.png" alt="Forbo Logo" />
      <div className="d-flex align-items-center ">
        <a href="/" className="sidenavA">
          Eingabe
        </a>
        <RotatingImage isRotated={inputVis} setRotated={toggleInput} />
      </div>
      {inputVis && (
        <div>
          <a
            href="/#Health"
            className={`ms-4 sidenavASub ${
              activeSection === "Health" ? "active" : ""
            }`}
          >
            Health
          </a>
          <a
            href="/#Safety"
            className={`ms-4 sidenavASub ${
              activeSection === "Safety" ? "active" : ""
            }`}
          >
            Safety
          </a>
          <a
            href="/#Energy"
            className={`ms-4 sidenavASub ${
              activeSection === "Energy" ? "active" : ""
            }`}
          >
            Energy
          </a>
          <a
            href="/#Material"
            className={`ms-4 sidenavASub ${
              activeSection === "Material" ? "active" : ""
            }`}
          >
            Material
          </a>
          <a
            href="/#Waste"
            className={`ms-4 sidenavASub ${
              activeSection === "Waste" ? "active" : ""
            }`}
          >
            Waste
          </a>
        </div>
      )}
      <div className="d-flex align-items-center ">
        <a href="/manage" className="sidenavA">
          Manage
        </a>
        <RotatingImage isRotated={managetVis} setRotated={toggleManage} />
      </div>
      {managetVis && (
        <div className="subdiv">
          <a href="/manage" className="ms-4 sidenavASub">
            Übersicht
          </a>
          <a className="ms-4 sidenavASub">Add Plant</a>
          <a className="ms-4 sidenavASub">Add Employee</a>
        </div>
      )}
      <div className="d-flex align-items-center ">
        <a href="/chart?topic=overview" className="sidenavA">
          Graphen
        </a>
        <RotatingImage isRotated={chartVis} setRotated={toggleChart} />
      </div>
      {chartVis && (
        <div className="subdiv">
          <a href="/chart?topic=overview" className={`ms-4 ${selectChartTopic("overview")} sidenavASub`}>
            Übersicht
          </a>
          <a href="/chart?topic=health" className={`ms-4 ${selectChartTopic("health")} sidenavASub`}>
            Gesundheit
          </a>
          <a href="/chart?topic=safety" className={`ms-4 ${selectChartTopic("safety")} sidenavASub`}>
            Sicherheit
          </a>
          <a href="/chart?topic=energy" className={`ms-4 ${selectChartTopic("energy")} sidenavASub`}>
            Energie
          </a>
          <a href="/chart?topic=material" className={`ms-4 ${selectChartTopic("material")} sidenavASub`}>
            Material
          </a>
          <a href="/chart?topic=waste" className={`ms-4 ${selectChartTopic("waste")} sidenavASub`}>
            Abfall
          </a>
        </div>
      )}
      <a href="#" className="sidenavA">
        Einstellungen
      </a>
      <a href="#" className="sidenavA">
        FAQ
      </a>
    </div>
  );
}
