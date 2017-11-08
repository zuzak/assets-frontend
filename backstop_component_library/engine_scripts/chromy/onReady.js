module.exports = function (chromy, scenario, vp) {
  console.log('SCENARIO > ' + scenario.label);
  require('./clickAndHoverHelper')(chromy, scenario);

  var scenarioLabel = scenario.label.toLowerCase()

  if (scenarioLabel === 'autocomplete') {
    chromy
      .evaluate(() => {
        var autocomplete = document.querySelector('#country-code-auto-complete')
        autocomplete.value = 'united'
        autocomplete.dispatchEvent(new Event('keyup'))
      })
  }

  if (scenarioLabel === 'youtube-player') {
    chromy.evaluate(function () {
      var youTubePlayerContainerElement = document.querySelector('.youtube-player-container')
      var maskingDivElement = document.createElement('div')

      maskingDivElement.style.cssText = [
        'position: absolute;',
        'top: 0;',
        'left: 0;',
        'width: 100%;',
        'height: 100%;',
        'background-color: #000;',
        'z-index: 1000;'
      ].join('')

      youTubePlayerContainerElement.insertBefore(maskingDivElement, youTubePlayerContainerElement.firstElementChild)
    })
  }
};
