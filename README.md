# tp-select

>

[![NPM](https://img.shields.io/npm/v/tp-select.svg)](https://www.npmjs.com/package/tp-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Captura de tela de 2020-01-25 20-30-42](https://user-images.githubusercontent.com/44972192/73128686-dd225f00-3fb1-11ea-8d1d-b6bd5e31d438.png)


## Install

```bash
npm install --save tp-select
```

## Usage

```jsx
import React, { Component } from 'react'

import TpSelect from 'tp-select'

const dados = [
  {
    nmAgrupador: 'Agrupador 1',
    value: 'agrupador 1',
    itens: [
      {
        value: 'nome 0',
        label: 'valor 1',
        itens: [
          {
            value: 'nivel 1',
            label: 'valor 2',
            itens: [
              {
                value: 'nivel 3',
                label: 'valor 4',
              },
              {
                value: 'nome 001',
                label: 'valor 7',
              },
            ],
          },
          {
            value: 'nom 0',
            label: 'valor 8',
          },
        ],
      },
    ],
  },
  {
    nmAgrupador: 'Agrupador 2',
    value: 'agrupador 2',
    itens: [
      {
        value: ' 1nome 0',
        label: 'nome',
        itens: [
          {
            value: '1nivel 1',
            label: 'valor 2',
            itens: [
              {
                value: '1nivel 3',
                label: 'valor 4',
              },
              {
                value: '1nome 001',
                label: 'valor 7',
              },
            ],
          },
          {
            value: '1nom 0',
            label: 'valor 8',
          },
        ],
      },
    ],
  },
];
class Example extends Component {
  render () {
    return (
      <TpSelect dados={dados} />
    )
  }
}

```

## props
  * dados: array no  seguinte foramato
```jsx
  {
    nmAgrupador:"nome do agrupador",
    value:0,
    itens:[label:"valor",value:1] // dentro de itens pode se passar outro campo itens, e dentro dele outro e assim quantas vezes desejar.
  }
  // caso não queira agrupadores no select, basta que no array acima não exista o campo nmAgrupador
```
 * search : possibilita a busca dentro dos itens
 * showWay : mostra o caminho ate o item selecionado
 * options : recebe um objeto, que tem os seguintes atributos.
    * NameValue : Define o nome do campo referente ao value,
    * NameLabel : Define o nome do campo referente a label,
    * NameSubLevel : Define o nome do campo referente a itens
* value : recebe o valor inicial do select

## License

MIT © [Thuplek](https://github.com/Thuplek)
