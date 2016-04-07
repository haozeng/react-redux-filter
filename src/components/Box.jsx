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
        { status ? <div> &#43; </div> : <div style={{ display: 'none' }}> &#43; </div> }
        { status ? <div style={{ display: 'none' }}> &#8730; </div> : <div> &#8730; </div> }
      </div>
    )
  }
}

export default Box;
