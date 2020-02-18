import React from 'react'
import ArrowDown from './assets/img/arrow-down.png'
import TextLabel from './text-label.jsx'
import PropTypes from 'prop-types'

function SubNivel(props) {
  const {dados, inputValue, options: {nameLabel, nameValue, nameSubLevel}, options} = props
  return (
    dados.length > 0 ? (dados.map((item) => (

      <div key={`SubItem-${item.key}`} className='SubIten'>
        <p key={`SubNivel-${item.key}`}
          className='label-p'
          onClick={() => { !item.hasOwnProperty('open') ? props.onChangeValue(item.key, item[nameValue], item[nameLabel]) : props.toogleSubMenu(item.key) }}
        >
          {item[nameLabel] ? <TextLabel subKey={item.key} value={item[nameLabel]} result={inputValue} /> : ''}
          {item.hasOwnProperty('open') ? (<img className={`arrow-down ${item.open ? 'rotate' : ''} `} src={ArrowDown} />) : '' }
        </p>
        {item[nameSubLevel] && item.open ? <SubNivel options={options} inputValue={inputValue} toogleSubMenu={(value) => props.toogleSubMenu(value)} open={item.open} dados={item[nameSubLevel]} onChangeValue={(key, value, label) => props.onChangeValue(key, value, label)} /> : ''}
      </div>
    ))
    ) : ''
  )
}
export default function Menu(props) {
  const {dados, inputValue, agrupador, options: {nameLabel, nameValue, nameSubLevel}, options} = props
  console.log(props, 'props')
  console.log(dados, 'dados')
  return (
    <div key={'Menu'} className={'menu'}>
      <p
        key={`menu-p-${dados.key}`}
        className='label-p'
        onClick={() => { dados.disable ? '' : (!dados.hasOwnProperty('open') ? props.onChangeValue(dados.key, dados[nameValue], dados[nameLabel]) : props.toogleSubMenu(dados.key)) }}
      >
        {dados && dados[nameLabel] ? <TextLabel subKey={dados.key} value={dados[nameLabel]} result={inputValue} /> : ''}
        {dados.hasOwnProperty('open') ? (<img className={`arrow-down ${dados.open ? 'rotate' : ''} `} src={ArrowDown} />) : '' }
      </p>
      {dados[nameSubLevel] && dados.open ? <SubNivel options={options} inputValue={inputValue} agrupador={agrupador} toogleSubMenu={(value) => props.toogleSubMenu(value)} dados={dados[nameSubLevel]} onChangeValue={(key, value, label) => props.onChangeValue(key, value, label)} /> : ''}
    </div>
  )
}
/* Menu.propTypes = {
  dados:PropTypes.isRequired
}
Menu.defaultProps = {
  inputValue: "",
  dados: [{ value: 'Sem dados', label: 'Sem Resultados', 'disable': true }]
}

 */
