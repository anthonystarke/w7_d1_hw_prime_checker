PubSub = require('../helpers/pub_sub.js');

const FormView = function (){

};

FormView.prototype.bindEvent = function () {
  form = document.querySelector('#prime-checker-form');

  form.addEventListener('submit' ,(event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('FormView:number-submitted',inputtedNumber);

  });
  const inputtedText = form.details;
};

module.exports = FormView;
