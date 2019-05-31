/**
 * PROBLEMA 2, PARCIAL #2
 * CHRISTOPHER JIMENEZ 8-922-2240
 * DS9
 */
(function () {

  var App = {

    Data: {
      matrix: undefined,
    },
    Methods: {
      init: function (matrix) {
        App.Data.matrix = matrix;
      },
      getPyramidWeight: function () {

        var matrix = App.Data.matrix;
        var indexOfPrev = 0,
          index, sIndex;
        var sum = 0;
        var temp = 0;

        for (index = 0; index < matrix.length; index++) {

          for (sIndex = 0; sIndex < matrix[index].length; sIndex++) {

            if (this.generateDirecctions() && sIndex == indexOfPrev + 1) {

              sum = sum + matrix[index][sIndex + 1];
              indexOfPrev = sIndex + 1;
              // derecha
              console.log(matrix[index][sIndex + 1]);
              break;

            } else if(indexOfPrev == sIndex) {

              sum = sum + matrix[index][sIndex];
              indexOfPrev = sIndex;
              // derecha
              console.log(matrix[index][sIndex]);
              break;

            }
          }
        }

        /**
         * chjimenez todo: validar en un if entero dentro del segundo for: los topes de la pirámide, 
         * luego dentro del if va el segundo if para las direcciones
         */

        return sum;
      },
      generateDirecctions: function () {

        var randomNumer = Math.floor(Math.random() * 10);
        var isPar = false;
        if (randomNumer % 2 == 0) {
          isPar = true;
        }

        return isPar;
      }
    }
  };
  App.Methods.init([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
  ]);
  console.log("Mayor Peso de la Pirámide: ", App.Methods.getPyramidWeight());
})();