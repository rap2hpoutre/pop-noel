import React, { Component } from "react";
import "./App.css";
import Doc from "./Doc";

const docs = [
  "joconde/07430003391",
  "memoire/AP62T000063",
  "joconde/5002E012518",
  "memoire/AP0602T05982",
  "memoire/IVR54_99172513NUCA",
  "memoire/AP0602T04393",
  "memoire/AP71L20602",
  "joconde/00000100554",
  "joconde/5002E009430",
  "joconde/M0418002994",
  "joconde/M0352003093",
  "joconde/M0333012292",
  "memoire/IVR94_20092A01074",
  "memoire/IVR26_20037101092",
  "joconde/00980000413",
  "memoire/APNADAR011656",
  "joconde/00000099832",
  "joconde/50430001541",
  "memoire/IVR11_20099500040",
  "joconde/07760000924",
  "joconde/07350000494",
  "memoire/AP62T000066",
  "memoire/APFSK50-09",
  "joconde/M0432000514"
];

class App extends Component {
  renderDocs() {
    return docs.map(d => <Doc key={d} uri={d} />);
  }
  render() {
    return (
      <div className="App">
        <h1>Joyeux Noël 😊</h1>
        <h2>Antoine, Jennifer, Nicolas,<br />Sandrine et Sébastien</h2>
        <section className="docs">{this.renderDocs()}</section>
        <div>
          Données :{" "}
          <a href="http://pop.culture.gouv.fr">
            Plateforme Ouverte du Patrimoine
          </a>
        </div>
      </div>
    );
  }
}

export default App;
