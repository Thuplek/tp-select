import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import { Container } from './styles';

export default class TextLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {result, value, subKey } = this.props
    return <span>
      { value.split(result).map((item, index) => {
        return <span key={`label-${subKey}-${index}`}>
          {item}{index < (value.split(result).length) - 1 ? <b>{result}</b> : ''}

        </span>
      })
      }

    </span>
  }
}
/* TextLabel.propTypes = {
  value: PropTypes.isRequired,
  result: PropTypes.isRequired,
  subKey: PropTypes.isRequired
}
TextLabel.defaultProps = {
  result: '',
  value: '',
  subKey: ''
}
 */
