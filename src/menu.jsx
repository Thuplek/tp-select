import React from 'react'
import ArrowDown from './assets/img/arrow-down.png'
import TextLabel from './text-label.jsx'
import PropTypes from 'prop-types'


function SubNivel(props) {
  const {dados , inputValue} = props
  return (
    dados.length > 0 ? (dados.map((item) => (

      <div key={`SubItem-${item.key}`} className='SubIten'>
        <p key={`SubNivel-${item.key}`}
          className='label-p'
          onClick={() => { !item.hasOwnProperty('open') ? props.onChangeValue(item.key, item.value, item.label) : props.toogleSubMenu(item.key) }}
        >
          {item.label ? <TextLabel subKey={item.key} value={item.label} result={inputValue} /> : ''}
          {item.hasOwnProperty('open') ? (<img className={`arrow-down ${item.open ? 'rotate' : ''} `} src={ArrowDown} />) : '' }
        </p>
        {item.itens && item.open ? <SubNivel inputValue={inputValue}toogleSubMenu={(value) => props.toogleSubMenu(value)} open={item.open} dados={item.itens} onChangeValue={(key, value, label) => props.onChangeValue(key, value, label)} /> : ''}
      </div>
    ))
    ) : ''
  )
}
export default function Menu(props) {
  const {dados , inputValue , agrupador} = props
  return (
    <div key={'Menu'} className={'menu'}>
      <p
        key={`menu-p-${dados.key}`}
        className='label-p'
        onClick={() => { dados.disable ? '' : (!dados.hasOwnProperty('open') ? props.onChangeValue(dados.key,dados.value, dados.label) : props.toogleSubMenu(dados.key)) }}
      >
        {dados && dados.label ? <TextLabel subKey={dados.key} value={dados.label} result={inputValue} /> : ''}
        {dados.hasOwnProperty('open') ? (<img className={`arrow-down ${dados.open ? 'rotate' : ''} `} src={ArrowDown} />) : '' }
      </p>
      {dados.itens && dados.open ? <SubNivel inputValue={inputValue} agrupador={agrupador} toogleSubMenu={(value) => props.toogleSubMenu(value)} dados={dados.itens} onChangeValue={(key, value, label) => props.onChangeValue(key, value, label)} /> : ''}
    </div>
  )
}
/* Menu.PropTypes = {
  dados:PropTypes.array.isRequired
}
Menu.defaultProps = {
  inputValue: "",
  dados: [{ value: 'Sem dados', label: 'Sem Resultados', 'disable': true }]
}
 */
