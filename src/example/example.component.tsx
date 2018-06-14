import * as React from 'react'

import { NavBar } from 'components'

import * as Styles from './example.component.styl'

export class ExampleComponent extends React.PureComponent {
  render() {
    return (
      <div className={Styles['local']}>
        <NavBar />
      </div>
    )
  }
}
