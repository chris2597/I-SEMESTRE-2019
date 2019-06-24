/**
 * LABORATORIO #4 INDIVIDUAL
 * CHRISTOPHER JIMENEZ 8-922-2240
 * DS9
 */
(function () {
  var App = {
      Data: {
          array: undefined
      },
      Controls: {
          form: document.querySelector('.js-form'),
          input: document.querySelector('.js-form-name')
      },
      Handlers:{
          onSubmitForm: function(e){
              
              e.preventDefault();
              App.Data.array = App.Controls.input.value.split(',');
              document.querySelector('.js-form-label').innerText = App.Methods.getAllSumArray();

          }
      },
      Methods: {
          init: function () {

              App.Methods.overridePrototype();
              App.Methods.bindEvents();

          },
          bindEvents: function(){
              App.Controls.form.addEventListener('submit', App.Handlers.onSubmitForm);
          },
          getAllSumArray: function () {
              var sum = 0;

              for (let index = 0; index < App.Data.array.length; index++) {
                  
                  if(App.Data.array[index] < 1 || App.Data.array[index] > 100){
                     throw new App.Exceptions.MathException('El número ingresado debe estar en el rango de 1 y 100');
                  } else{
                      sum = sum + parseInt(App.Data.array[index]);
                  }
              }

              return sum;
          },
          overridePrototype: function () {
              App.Exceptions.MathException.prototype.toString = App.Utils.toString;
          },
      },
      Exceptions: {
          MathException: function (message) {
              this.message = message;
              this.name = 'MathException';
          }
      },
      Utils: {
          toString: function () {
              return `${this.name}: ${this.message}`;
          },

      }
  }
  App.Methods.init();
})()
