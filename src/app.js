const PrimeChecker = require('./models/prime_checker.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  formView = new FormView();
  formView.bindEvent();

  primeChecker = new PrimeChecker();
  primeChecker.bindEvent();

  resultView = new ResultView();
  resultView.bindEvent();

});
