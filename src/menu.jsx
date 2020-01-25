import React, { Fragment } from 'react';
import ArrowDown from './assets/img/arrow-down.png'
function SubNivel(props) {
  return (
    props.dados.length > 0 ? (props.dados.map((item) => (

      <div key={`SubItem-${item.value}`} className="SubIten">
        <p key={`SubNivel-${item.value}`}
            className='label-p'
            onClick={() => { !item.hasOwnProperty("open") ? props.onChangeValue(item.value,item.label) : props.toogleSubMenu(item.value)}}
        >
            {item.label}
            {item.hasOwnProperty("open") ?(<img className={`arrow-down ${item.open ? "rotate":""} `} src={ArrowDown}/>):"" }
        </p>
          {item.itens && item.open ? <SubNivel toogleSubMenu={(value) => props.toogleSubMenu(value)} open={item.open} dados={item.itens} onChangeValue={(value,label) => props.onChangeValue(value,label)}></SubNivel> : ''}
      </div>
    ))
    ) : ''
  );
}
export default function Menu(props) {
  return (
    <div key={'Menu'} className={'menu'}>
      <p
        key={`menu-p-${props.dados.value}`}
        className='label-p'
        onClick={() => {props.dados.disable ? "" :(!props.dados.hasOwnProperty("open") ? props.onChangeValue(props.dados.value,props.dados.label) : props.toogleSubMenu(props.dados.value))}}
      >
        {props.dados.label}
        {props.dados.hasOwnProperty("open") ?(<img className={`arrow-down ${props.dados.open?"rotate":""} `} src={ArrowDown}/>):"" }
      </p>
      {props.dados.itens && props.dados.open ? <SubNivel agrupador={props.agrupador} toogleSubMenu={(value) => props.toogleSubMenu(value)}  dados={props.dados.itens} onChangeValue={(value,label) => props.onChangeValue(value,label)}></SubNivel> : ''}
    </div>
  );
}
