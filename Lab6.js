/**
 * LABORATORIO #6 INDIVIDUAL
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
        Handlers: {
            onSubmitForm: function (e) {

                e.preventDefault();
                App.Data.array = App.Controls.input.value.split(',');
                document.querySelector('.js-form-label').innerText = App.Methods.getPairOfArray();

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
            getPairOfArray: function () {

                var quantOfPair = 0;
                var array = App.Data.array;

                for (var index = 0; index < array.length; index++) {

                    for (var j = index; j < array.length; j++) {

                        if (array[index] == array[j + 1] && array[index] != null && array[j + 1] != null) {

                            quantOfPair++;
                            array[index] = null;
                            array[j + 1] = null;
                            break;
                        }

                    }
                }

                return quantOfPair;
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