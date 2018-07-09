import * as React from 'react'
import * as Styles from './rainbow-loading.styl'

export class RainbowLoading extends React.PureComponent {
  render() {
    return (
      <div className={Styles['loaderWrap']}>
        <div className={Styles['loaderInner']}>
          <div className={Styles['loaderLineWrap']}>
            <div className={Styles['loaderLine']}></div>
          </div>
          <div className={Styles['loaderLineWrap']}>
            <div className={Styles['loaderLine']}></div>
          </div>
          <div className={Styles['loaderLineWrap']}>
            <div className={Styles['loaderLine']}></div>
          </div>
          <div className={Styles['loaderLineWrap']}>
            <div className={Styles['loaderLine']}></div>
          </div>
          <div className={Styles['loaderLineWrap']}>
            <div className={Styles['loaderLine']}></div>
          </div>
        </div>
      </div>
    )
  }
}
