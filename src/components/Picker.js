import React, { Component, PropTypes } from 'react'
import {Button} from 'react-weui'

/* <select onChange={e => onChange(e.target.value)} value={value}>*/
export default class Picker extends Component {
  render() {
    const { value, onClick, options } = this.props
    return (
      <span>
          {options.map(option =>
            <Button type="primary" onClick={e=>onClick(e.target.getAttribute('value'))}  className="tab" value={option} key={option}>{option}</Button>
          )
          }
      </span>
    )
  }
}
Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
