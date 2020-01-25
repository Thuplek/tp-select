# tp-select

>

[![NPM](https://img.shields.io/npm/v/tp-select.svg)](https://www.npmjs.com/package/tp-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
      {
        value: 'nome 21',
        label: 'valor 1',
        itens: [
          {
            value: 'nivel 21',
            label: 'valor 2',
            itens: [
              {
                value: 'nivel 23',
                label: 'valor 4',
              },
              {
                value: 'nome 2001',
                label: 'valor 7',
              },
            ],
          },
          {
            label: 'valor 8',
            value: 'nom 20',
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
    nmAgrupador:"valor",
    value:0,
    itens:[label:"valor",value:1] // dentro de itens pode se passar outro campo itens
  }
  // caso não queira agrupadores no select, basta que no array acima não exista o campo nmAgrupador
```
 * search: possibilita a busca por agrupadores
 * showWay: mostra o caminho ate o item selecionado

## License

MIT © [Thuplek](https://github.com/Thuplek)
