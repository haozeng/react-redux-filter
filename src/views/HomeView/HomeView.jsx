/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import { map, findIndex } from 'lodash';
import Box from '../../components/Box'
import { fetchTerms, sendTerms } from '../../redux/modules/terms'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component<void, Props, void> {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    terms: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.dispatch(fetchTerms());
  }

  toggleStatus = (status, index) => {
    let terms = this.props.terms
    let term = terms[index]
    term.status = !status
    terms[index] = term

    this.setState({ terms: terms })
  }

  sendTerms = () => {
    this.props.dispatch(sendTerms(this.props.terms));
  }

  render () {
    const { terms } = this.props;

    const buttonStyle = {
      'marginTop': 20,
      'height': 40,
      'backgroundColor': '#fc0',
      'border':'1px solid #e6b800',
      'text-align': 'center',
      'color':'#fff',
      'border-radius': 3,
      'font-size': 20,
      'padding':5,
      'width':200,
      'cursor':'pointer'
    }

    const containerStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={containerStyle}>
        <ul>
          {
            map(terms, (term) => {
              return (<Box text={ term.text } status={ term.status } index={ findIndex(terms, term) } toggleStatus={ this.toggleStatus } />)
            })
          }
        </ul>
        <button style={buttonStyle} onClick={ this.sendTerms }>show your matches</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  terms: state.terms
})

export default connect((mapStateToProps))(HomeView)
