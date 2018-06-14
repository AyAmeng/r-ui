import React from 'react'
import { render } from 'react-dom'

import './common'

import { ExampleComponent } from 'example'

if (module.hot) {
  module.hot.accept()
}

class AppComponent extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <ExampleComponent />
      </div>
    )
  }
}

const rootElement = document.getElementById('app')
render(<AppComponent />, rootElement)
// defined Global variables
