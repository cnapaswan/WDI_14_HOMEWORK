import React from 'react'
import PasswordEstimator from './PasswordEstimator'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      how weak is your password
      <PasswordEstimator />
    </div>
  }

}
