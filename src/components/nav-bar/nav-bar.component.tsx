import * as React from 'react'

import * as Styles from './nav-bar.component.styl'

type Props = {
  brandName?: string
  middleItems?: string[]
  userInfo?: {
    name: string
    avatarUrl: string
  }
}

export class NavBarComponent extends React.PureComponent<Props> {
  static defaultProps = {
    brandName: 'R-ui',
    middleItems: ['Hello R ui'],
    userInfo: {
      name: 'Wave',
      avatarUrl: '/1'
    }
  }

  render() {
    return (
      <div className={Styles['navBar']}>
        <div className={Styles['brandName']}>{this.props.brandName}</div>
        <div className={Styles['middleItems']}>
          {this.props.middleItems.map(r => {
            return r
          })}
        </div>
        <div className={Styles['userInfo']}>
          <span className={Styles['userAvatar']}>
            {this.props.userInfo.avatarUrl}
          </span>
          <span className={Styles['userName']}>{this.props.userInfo.name}</span>
        </div>
      </div>
    )
  }
}
