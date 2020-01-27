import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './menu.jsx'
import ArrowDown from './assets/img/arrow-down.png'
import './styles.css'
import TextLabel from './text-label.jsx'

export default class TpSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueInput: '',
      dados: '',/* props.dados */
      qtdResultado:0
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.toogleSubMenu = this.toogleSubMenu.bind(this)

    this.container = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
    if (this.props.dados && Array.isArray(this.props.dados)) {
      this.setState({
        dados: this.tranformDados(this.props.dados)
      })
    } else {
      this.setState({
        dados: [{ value: 'Sem dados', label: 'Sem dados', 'disable': true }]
      })
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }
  tranformDados(dados) {
    var contador = 0
    if (Array.isArray(dados)) {
      try {
        let dadosTransform = dados.map((item) => {
          if (item.itens && Array.isArray(item.itens) && item.itens.length == 0) {
            delete item.itens
          }
          if (item.itens && Array.isArray(item.itens) && item.itens.length > 0) {
            item.open = false
            item.key = `${item.label}-${item.value}-${contador}`
            contador++
            transformSubItens(item.itens)
          } else {
            item.key = `${item.label}-${item.value}-${contador}`
          }
          return item
        })
        return dadosTransform
      } catch (error) {
        console.error(error)
      }
    } else {
      // eslint-disable-next-line no-return-assign
      return dados = [{ value: 'Sem dados', label: 'Sem dados', 'disable': true }]
    }

    function transformSubItens(itens) {
      try {
        return itens.map((item) => {
          if (item.itens && Array.isArray(item.itens) && item.itens.length == 0) {
            delete item.itens
          }
          if (item.itens && Array.isArray(item.itens) && item.itens.length > 0) {
            item.open = false
            item.key = `${item.label}-${item.value}-${contador}`
            contador++
            transformSubItens(item.itens)
          } else {
            item.key = `${item.label}-${item.value}-${contador}`
          }

          return item
        })
      } catch (error) {
        console.error(error)
        transformSubItens(Object.values(dados))
      }
    }
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        isOpen: false
      })
      this.allOpenFalse()
    }
  }

  allOpenFalse() {
    let dados = this.state.dados.map((item) => {
      if (item.open) {
        item.open = false
      }
      if (item.itens) {
        opFalse(item.itens)
      }
      return item
    })
    this.setState({
      dados: dados
    })
    function opFalse(itens) {
      try {
        itens.map((item) => {
          if (item.open) {
            item.open = false
          }
          if (item.itens) {
            opFalse(item.itens)
          }
          return item
        })
      } catch (error) {
        console.error(error)
        opFalse(Object.values(itens))
      }
    }
  }

  onChangeValue(key, value, label = null) {
    if (this.props.showWay) {
      let caminho = []
      let encontrado = false
      try {
        this.state.dados.map((item) => {
          if (!encontrado) {
            caminho.push({key: key, value: item.value, label: item.nmAgrupador ? item.nmAgrupador : item.label})
            if (item.itens) {
              vfSubNivel(item.itens)
              if (!encontrado) {
                caminho = []
              }
            } else {
              if (item.key === key) {
                encontrado = true
              } else {
                caminho.pop()
              }
            }
          }
        })
      } catch (error) {
        console.error(error)
        /* itens = Object.values(itens) */
      }

      let caminhoString = {}
      caminhoString.label = ''
      caminho.map((item, index) => { caminhoString.label += (`${item.label}${index == caminho.length - 1 ? '' : ' • '}`) })
      this.setState({
        valueInput: caminhoString,
        isOpen: false
      })
      if (this.props.onChange) {
        this.props.onChange(caminhoString.value = caminho.pop())
      }

      // eslint-disable-next-line no-inner-declarations
      function vfSubNivel(itens) {
        try {
          itens.map((item) => {
            if (!encontrado) {
              if (item.value) {
                caminho.push({key: key, value: item.value, label: item.nmAgrupador ? item.nmAgrupador : item.label})
              }
              if (item.itens) {
                vfSubNivel(item.itens)
                if (!encontrado) {
                  caminho.pop()
                }
              } else {
                if (item.key === key) {
                  encontrado = true
                } else {
                  caminho.pop()
                }
              }
            }
            return item
          })
        } catch (error) {
          console.error(error)
/*           itens = Object.values(itens)
 */        }
      }
    } else {
      this.setState({
        valueInput: {label: label, value: value},
        isOpen: false

      })
      if (this.props.onChange) {
        this.props.onChange({label: label, value: value})
      }
    }

    this.allOpenFalse()
  }

  toogleOpen = () => {
    this.setState({
      isOpen: !(this.state.isOpen)
    })
    if (!this.state.isOpen) {
      document.getElementById('input-comboBox').focus()
    }
  }
  toogleSubMenu(value) {
    let dados = this.state.dados.map((item) => {
      if (item.key === value) {
        item.open = !item.open
      }
      if (item.itens) {
        tgSubNivel(value, item.itens)
      }
      return item
    })
    this.setState({ dados: dados })

    function tgSubNivel(value, itens) {
      try {
        itens.map((item) => {
          if (item.key === value) {
            item.open = !item.open
          }
          if (item.itens) {
            tgSubNivel(value, item.itens)
          }
          return item
        })
      } catch (error) {

        console.error(error)
      }
    }
  }

  search(value, dados) {
    var qtddR = 0;
    this.setState({isOpen: true})
    dados = filtrar(value, dados)
    if (!(dados.length > 0)) {
      dados = [{ value: 'Sem dados', label: 'Sem Resultados', 'disable': true }]
    }
    this.setState({
      dados: dados,
      valueInput: {label: value},
      qtdResultado:qtddR
    })

    function filtrar (value, dados) {
      var matches = []
      if (!Array.isArray(dados)) return matches

      dados.forEach(function(i) {
        if (i.nmAgrupador) {
          if (i.nmAgrupador.toUpperCase().includes(value.toUpperCase())) {
            qtddR++
            matches.push(i)
          } else {
            i.open = false;
            let childResults = filtrar(value, i.itens)
            if (childResults.length) { matches.push(Object.assign({}, i, { itens: childResults, open: true })) }
          }
        } else {
          if (i.label.toUpperCase().includes(value.toUpperCase())) {
            qtddR++
            matches.push(i)
          } else {
            i.open = false;
            let childResults = filtrar(value, i.itens)
            if (childResults.length) { matches.push(Object.assign({}, i, { itens: childResults, open: true })) }

          }
        }
      })

      return matches
    };

  }
  render() {
    const { valueInput, isOpen, dados, qtdResultado } = this.state

    return (
      <div className='ComboBox-root' ref={this.container} >
        <div title={`${valueInput.label ? valueInput.label : ''}`} className={`dv-ipt-ComboBox ${isOpen ? 'focus' : ''}`} onClick={() => this.toogleOpen()}>
          <input
            id='input-comboBox'
            placeholder={'Selecione...'}
            className={`inputComboBox ${this.props.search ? 'search' : ''}`}
            readOnly={!this.props.search}
            autoComplete='off'
            // defaultValue={valueInput.label}
            onChange={(event) => this.search(event.target.value, this.props.dados)}
            value={valueInput.label}
          />
          <img className={`arrow-down ${isOpen ? 'rotate' : ''} `} src={ArrowDown} />
        </div>
        {isOpen ? (
          <div className='BoxDeSelecao' >
            {dados.map((item) => (
              item.nmAgrupador
                ? <div key={`${item.value}`}>
                  {item.nmAgrupador && item.itens && Array.isArray(item.itens) && item.itens.length > 0
                    ? <p
                      key={`p-titleAgrupador-${item.key}`}
                      className='title-Agrupador'>
                      {item.nmAgrupador}
                      <span>
                        {item.itens.length}
                      </span>
                    </p>
                    : ''
                  }
                  {
                    item.itens.map((item) =>
                      <Menu
                        key={`Menu-${item.key}`}
                        agrupador dados={item}
                        toogleSubMenu={(value) => this.toogleSubMenu(value)}
                        onChangeValue={(value, label) => this.onChangeValue(value, label)}
                        inputValue={valueInput.label}
                      />
                    )
                  }
                </div>
                : <Menu
                  dados={item}
                  toogleSubMenu={(value) => this.toogleSubMenu(value)}
                  onChangeValue={(value, label) => this.onChangeValue(value, label)}
                  inputValue={valueInput.label}

                />
            ))}
          {/* <p className="rCorrespondente">{`${valueInput.label && qtdResultado >= 0 ? `foram encontrados ${qtdResultado} resultados` : ""}`}</p> */}
          </div>
        ) : ''}
      </div>
    )
  }
}
TpSelect.defaultProps = {
  search: false,
  showWay: false,
  dados: [{ value: 'Sem dados', label: 'Sem Resultados', 'disable': true }]
}
