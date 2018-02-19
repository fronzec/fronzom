'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fronzom;
function fronzom(str) {
    var traslation = str;

    //si la palabra original es un palinddromo
    //ninguna regla anterior cuenta
    // y se devuelve la misma palabra intercalando mayusculas y minusculas
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var traslation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            traslation += capitalize ? char.toUpperCase() : char.toLowerCase(); ///Concatenamos al resultado
            capitalize = !capitalize;
        }
        return traslation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    //Si la palabra termina con "ar" se le quitan esos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        traslation = str.slice(0, -2);
    }

    //Si la palabra empieza con Z se le añade "pe" al final
    if (str.toLowerCase().startsWith("z")) {
        traslation += 'pe';
    }

    //Si la palabra traducida tiene 10 o mas letras se tiene que partir por la mitad y unir por un guion medio
    var length = traslation.length;
    if (length >= 10) {
        var firstHalf = traslation.slice(0, Math.round(length / 2));
        var secondHalf = traslation.slice(Math.round(length / 2));
        traslation = firstHalf + '-' + secondHalf;
    }

    return traslation;
}