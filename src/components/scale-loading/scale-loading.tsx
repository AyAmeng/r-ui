import * as React from 'react'
import * as Styles from './scale-loading.styl'

type props = {
  width?: number
  height?: number
  outColor?: string
  insideColor?: string
}

export class ScaleLoading extends React.PureComponent<props> {
  defaultProps: {
    width: 20
    height: 20
    outColor: 'blue'
    insideColor: 'blue'
  }

  render() {
    return (
      <div className={Styles['wrap']}>
        <div className={Styles['outSide']} />
        <div className={Styles['inSide']} />
      </div>
    )
  }
}
