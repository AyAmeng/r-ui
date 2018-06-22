import * as React from 'react'

import {
  ScaleLoading,
  SideBarComponent as SideBar,
  IndicatorLoading
} from 'components'

import * as Styles from './docs-preview.styl'
const items = [
  {
    name: 'LOADING',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'two',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'three',
    onClick: () => {
      console.info('hihi')
    }
  },
  {
    name: 'four',
    onClick: () => {
      console.info('hihi')
    }
  }
]

export class DocsPreview extends React.PureComponent {
  render() {
    return (
      <div className={Styles['container']}>
        <SideBar items={items} width={200} extraClass="sidebar-wrap" />
        <div className={Styles['content']}>
          <ScaleLoading />
          <IndicatorLoading />
        </div>
      </div>
    )
  }
}
