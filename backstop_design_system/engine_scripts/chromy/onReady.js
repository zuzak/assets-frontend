module.exports = function (chromy, scenario, vp) {
  console.log('SCENARIO > ' + scenario.label);
  require('./clickAndHoverHelper')(chromy, scenario);

  if (scenario.label === 'Character Counter') {
    chromy
      .type('textarea', 'text')
  }
};
