import React from 'react'
import { render } from 'react-dom'

import './styles'
import './common'

import { DocsPreview } from './docs-preview'

if (module.hot) {
  module.hot.accept()
}

class AppComponent extends React.PureComponent {
  render() {
    return (
      <div className="main" style={{ width: '100%', height: '100%' }}>
        <DocsPreview />
      </div>
    )
  }
}

const rootElement = document.getElementById('app')
render(<AppComponent />, rootElement)
// defined Global variables
