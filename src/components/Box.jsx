import React, { PropTypes } from 'react';
import classNames from 'classnames'
import { merge } from 'lodash'

class Box extends React.Component {
  
  static propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    toggleStatus: PropTypes.func.isRequired
  }

  render() {
    const { text, status, index, toggleStatus } = this.props;

    let boxStyle = {
      'display': 'inline-block',
      'fontSize': 15,
      'borderRadius': 10,
      'padding': '8px 10px',
      'margin': '50px 10px',
      'color': 'white',
      'cursor': 'pointer'
    }

    if (status) {
      merge(boxStyle, { 'backgroundColor': '#55C6C9' })
    } else {
      merge(boxStyle, { 'backgroundColor': '#F66026' })
    }

    const textStyle = {
      'marginLeft': 10,
      'float': 'left'
    }

    const hideStyle = {
      'display': 'none',
    }

    const iconStyle = {
      'marginLeft': 10,
      'float': 'left'
    }

    return (
      <div style={boxStyle}>
        <div style={textStyle} onClick={ () => toggleStatus(status, index) }>{ text }</div>
        { status ? <div style={iconStyle}> &#43; </div> : <div style={hideStyle}> &#43; </div> }
        { status ? <div style={hideStyle}> &#8730; </div> : <div style={iconStyle}> &#8730; </div> }
      </div>
    )
  }
}

export default Box;
