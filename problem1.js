/**
 * PROBLEMA 1, PARCIAL #2
 * CHRISTOPHER JIMENEZ 8-922-2240
 * DS9
 */
(function () {

    var App = {

        Data: {
            string: undefined,
            comparedString: ""
        },
        Methods: {
            init: function (string) {
                App.Data.string = string;
            },
            getQuantOfLetters: function () {

                var string = App.Data.string;
                var result = "";

                for (let index = 0; index < string.length; index++) {

                    var quantity = 1;
                    var j = 1;

                    if (this.findElementCompared(string.charAt(index)) == undefined) {

                        for (j = j + index; j < string.length; j++) {

                            if (string.charAt(index) === string.charAt(j)) {
                                quantity++;
                                App.Data.comparedString = App.Data.comparedString + string.charAt(j);
                            }
                        }
                        result = result + quantity.toString() + " " + string.charAt(index) + ", ";
                    }

                }

                return result.slice(0, -2);
            },
            findElementCompared: function (element) {

                for (let index = 0; index < App.Data.comparedString.length; index++) {
                    if (element === App.Data.comparedString.charAt(index)) {
                        var exist = true;
                        break;
                    }
                }
                
                return exist;
            }
        }
    };
    App.Methods.init("aaabbaaccbacbdfd");
    console.log("Resultado: ", App.Methods.getQuantOfLetters());
})();