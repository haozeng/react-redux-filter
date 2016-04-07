import React, { PropTypes } from 'react';
import classNames from 'classnames'

class Box extends React.Component {
  
  static propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    toggleStatus: PropTypes.func.isRequired
  }

  render() {
    const { text, status, index, toggleStatus } = this.props;
    return (
      <div className='box'>
        <div className='text' onClick={ () => toggleStatus(status, index) }>{ text }</div>
        <div className={ `plus-${ status }` }></div>
        <div className={ `circle-${ status }` }></div>
      </div>
    )
  }
}

export default Box;
