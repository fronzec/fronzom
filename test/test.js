const expect = require('chai').expect
const fronzom = require('..').default

describe('#fronzom', function () {
    it('Si la palabra termina con "ar" se le quitan esos caracteres', function () {
        const traslation = fronzom('Programar')
        expect(traslation).to.equal('Program')
    });
    it('Si la palabra empieza con Z se le añade "pe" al final', function () {
        const traslation = fronzom('Zorro')
        const traslation2 = fronzom('Zarpar')
        expect(traslation).to.equal('Zorrope')
        expect(traslation2).to.equal('Zarppe')
    });
    it('Si la palabra traducida tiene 10 o mas letras se tiene que partir por la mitad y unir por un guion medio', function () {
        const traslation = fronzom('abecedario')
        expect(traslation).to.equal('abece-dario')
    });
    it('si la palabra original es un palinddromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
        const traslation = fronzom('sometemos')
        expect(traslation).to.equal('SoMeTeMoS')
    });
})