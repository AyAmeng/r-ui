import * as React from 'react'
import * as cx from 'classnames'

import * as Styles from './side-bar.component.styl'

type SideBarItem = {
  name: string
  onClick?: () => void
}

type Props = {
  extraClass?: string
  width?: number
  activeColor?: string
  items: SideBarItem[]
}

type State = {
  active: string
}

export class SideBarComponent extends React.PureComponent<Props, State> {
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      active: this.props.items[0].name
    }
  }

  renderClassNames(item: SideBarItem) {
    const activeItem = this.state.active
    return cx(Styles['item'], activeItem === item.name ? Styles['active'] : '')
  }

  renderItems() {
    return this.props.items.map(r => {
      const handleItemClick = () => {
        this.setState({
          active: r.name
        })
        if (r.onClick) r.onClick()
      }

      return (
        <div
          className={this.renderClassNames(r)}
          onClick={handleItemClick}
          key={r.name}
        >
          {r.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div
        className={cx(Styles['container'], this.props.extraClass)}
        style={{ width: this.props.width ? `${this.props.width}px` : '100px' }}
      >
        {this.renderItems()}
      </div>
    )
  }
}
