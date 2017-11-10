"use strict";

/**
 * Start loot data loading
 */
function startLootLoad(populkationJsonUrl) {

  $.getJSON(populkationJsonUrl, setPopulation);
  $.getJSON(BASELINES_URL, setBaseline);
  if (typeof processAdvancement === 'function' ) {
    $.get(ADVANCEMENT_URL, processAdvancement);
  }

  function setPopulation(jsoNData) {
    popArray = jsoNData;
    popLoaded = true;
    checkLoadState();
  }

  function setBaseline(jsonData) {
    baselineArray = jsonData;
    baselineLoaded = true;
    checkLoadState();
  }
}
