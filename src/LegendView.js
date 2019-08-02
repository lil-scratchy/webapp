import React from 'react';
import './App.css';
import './LegendView.css';

class LegendView extends React.Component {

  render() {
    return (
      <div className="app-view">
        <div className="view-title">
          <h1>Legend</h1>
        </div>
        <div className="app-content">
          <p><h3>Particle Count</h3>
          The dust fraction known as fine dust (PM2.5) contains 50% of particles with a diameter of 2.5 µm, a higher proportion of     smaller particles and a lower proportion of larger particles. PM2.5 is a subset of PM10 - particles of this size can reach the alveoli. They are as large as bacteria and cannot be seen with the naked eye. The highly visible dust produced on     construction sites or by grit consists mainly of coarse dust.
Due to the small size of the fine dust particles, the resulting long residence time in the atmosphere (days to weeks) and the atmospheric transport distance of up to 1,000 km, PM2.5 is of high national and international relevance.
          </p>
          <p><h3>Carbon Dioxide</h3>
          Carbon dioxide (chemical abbreviation: CO2) is a colourless and odourless gas. With a concentration of around 400 ppm1 it is a natural component of the ambient air. CO2 is produced during the complete combustion of carbon-containing substances with sufficient oxygen supply. In the organism of living beings it is formed as a degradation product of cellular respiration.
For 150 years, the concentration of carbon dioxide in indoor air has been regarded as an indicator of air quality in human recreation rooms. In contrast to mechanically ventilated buildings, for which DIN EN 13779 introduced four graduated value ranges, there has been no more recent evaluation for naturally ventilated interiors since Pettenkofer's proposed guideline value of 1000 ppm carbon dioxide in 1858. The Ad Hoc Working Group on Indoor Standard Values of the Federal Environment Agency and the Supreme State Health Authorities derives health and hygiene guidelines for carbon dioxide in indoor air from the evaluation of current intervention studies.  Accordingly, concentrations below 1000 ppm of carbon dioxide in indoor air are considered harmless, concentrations between 1000 and 2000 ppm are considered conspicuous and concentrations above 2000 ppm are considered unacceptable.
          </p>
          <p><h3>Oxgen</h3>
          The exhaled air of a human being still contains approx. 16 % oxygen. The oxygen concentration of the air breathed in before is about 21% on average.
Even an oxygen concentration of 100 %, such as is necessary, for example, in the ventilation of patients, can lead to damage to the brain in the medium term. Oxygen concentrations of less than 13% can cause severe, irreversible damage that can lead to death - suffocation.
          </p>
        </div>
      </div>
    );
  }
}

export default LegendView;
