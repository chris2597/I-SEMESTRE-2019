/**
 * LABORATORIO #5 INDIVIDUAL
 * CHRISTOPHER JIMENEZ 8-922-2240
 * DS9
 */
(function () {

  var App = {

      Data: {
          matrix: undefined
      },
      Controls: {
          form: document.querySelector('.js-form'),
          input: document.querySelector('.js-form-name')
      },
      Handlers: {
          onSubmitForm: function (e) {

              e.preventDefault();
              App.Data.matrix = new Array(parseInt(App.Controls.input.value));
              document.querySelector('.js-form-printMatrix').innerHTML = App.Methods.generateRandomNumbers();
              document.querySelector('.js-form-label').innerText = App.Methods.sumPrincipalSlash();

          }
      },
      Methods: {
          init: function () {

              App.Methods.overridePrototype();
              App.Methods.bindEvents();

          },
          bindEvents: function () {
              App.Controls.form.addEventListener('submit', App.Handlers.onSubmitForm);
          },
          generateRandomNumbers: function () {

              for (let index = 0; index < App.Data.matrix.length; index++) {

                  App.Data.matrix[index] = new Array(App.Data.matrix.length); //define la longitud de cada fila

                  for (let sIndex = 0; sIndex < App.Data.matrix[index].length; sIndex++) {
                      App.Data.matrix[index][sIndex] = Math.floor(Math.random() * 10);
                  }
              }

              return App.Data.matrix;
          },
          sumPrincipalSlash: function () {

              var sumOfPrincipalSlash = 0;
              for (let index = 0; index < App.Data.matrix.length; index++) {
                  sumOfPrincipalSlash = sumOfPrincipalSlash + App.Data.matrix[index][index];
              }

              return sumOfPrincipalSlash;
          },
          overridePrototype: function () {
              App.Exceptions.MathException.prototype.toString = App.Utils.toString;
          },
          ThrowException1: function () {
              throw new App.Exceptions.MathException('');
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
  };
  App.Methods.init();
})();