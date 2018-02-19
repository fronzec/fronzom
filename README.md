# Fronzom
Fronzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com),
el mejor lugar de educación online en español

## Descripcion del idioma
- si la palabra original es un palinddromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
- Si la palabra termina con "ar" se le quitan esos caracteres
- Si la palabra empieza con Z se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras se tiene que partir por la mitad y unir por un guion medio

## Instalacion

```
npm install fronzom
```
## Uso

```
console.log(platzom("programar"));//program
console.log(platzom("zorro"));//zorrope
console.log(platzom("abecedario"));//abece-dario
console.log(platzom("sometemos"));//SoMeTeMoS
```

## Creditos
-[Eduardo Flores](https://eflores.me)

## Licencia
[MIT](https://opensource.org/licenses/MIT)