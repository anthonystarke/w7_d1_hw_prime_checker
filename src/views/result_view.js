PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){


};

ResultView.prototype.bindEvent = function () {
  const resultOutput = document.querySelector('#result');
  PubSub.subscribe('PrimeChecker:bool-submitted',(event) => {
    if(event.detail === true)
    {
      resultOutput.textContent = "Yes your number is a prime number";
    }else{
      resultOutput.textContent = "Nope your number is not prime";
    }

  });
};

module.exports = ResultView;
