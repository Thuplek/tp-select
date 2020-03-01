import React, { Component } from 'react'

import TpSelect from 'tp-select'
const dataAgrupado = [
  {
    nmAgrupador: 'Agrupador 1',
    value: 'agrupador 1',
    subnivel: [
      {
        value: 'nome 0',
        indice: 'valor 1',
        /*  open: false, */
        subnivel: [
          {
            value: 'nivel 1',
            indice: 'valor 2',
            /*  open: false, */
            subnivel: [
              {
                value: 'nivel 3',
                indice: 'valor 4',
              },
              {
                value: 'nome 001',
                indice: 'valor 7',
              },
            ],
          },
          {
            value: 'nom 0',
            indice: 'valor 8',
          },
        ],
      },
      {
        value: 'nome 21',
        indice: 'valor 1d',
        /*  open: false, */
        subnivel: [
          {
            value: 'nivel 21',
            indice: 'valor 2',
            /*  open: false, */
            subnivel: [
              {
                value: 'nivel 23',
                indice: 'valor 4',
              },
              {
                value: 'nome 2001',
                indice: 'valor 57',
              },
            ],
          },
          {
            indice: 'valor 8',
            value: 'nom 20',
          },
        ],
      },
    ],
  },
  {
    nmAgrupador: 'Agrupador 2',
    value: 'agrupador 2',
    subnivel: [
      {
        value: ' 1nome 0',
        indice: 'nome',
        /* open: false, */
        subnivel: [
          {
            value: '1nivel 1',
            indice: 'valor 2',
            /* open: false, */
            subnivel: [
              {
                value: '1nivel 3',
                indice: 'valor 4',
              },
              {
                value: '1nome 001',
                indice: 'valor 7',
              },
            ],
          },
          {
            value: '1nom 0',
            indice: 'ww',
          },
        ],
      },
    ],
  },
];

export default class App extends Component {
  render () {
    return (
      <div style={{width:300,margin:20}}>
        <TpSelect
          dados={dataAgrupado}
          showWay
          search
          options={{NameSubLevel:"subnivel",NameLabel:'indice'}}
          // value={'1nom 0'}
        />
      </div>
    )
  }
}
