/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import { map, findIndex } from 'lodash';
import Box from '../../components/Box'
import { receiveTerms } from '../../redux/modules/terms'

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
    this.props.dispatch(receiveTerms());
  }

  toggleStatus = (status, index) => {
    let terms = this.props.terms
    let term = terms[index]
    term.status = !status
    terms[index] = term

    this.setState({ terms: terms })
  }

  render () {
    const { terms } = this.props;

    return (
      <div>
        <ul>
          {
            map(terms, (term) => {
              return (<Box text={ term.text } status={ term.status } index={ findIndex(terms, term) } toggleStatus={ this.toggleStatus } />)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  terms: state.terms
})

export default connect((mapStateToProps))(HomeView)
