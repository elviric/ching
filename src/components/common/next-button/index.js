/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as ReactRouter from 'react-router'
import vectorImg from './Vector.png'

import style from './index.style.js'

class NextButton extends React.Component {
  render() {
    return (
      <div css={style.button__location}>
        <button css={style.continue__button}>
          <div css={style.continue__text}>{this.props.children}</div>
          <div css={style.continue__circle}>
            <img css={style.vector} src={vectorImg} alt="" />
          </div>
        </button>
      </div>
    )
  }

  handleClick = event => {
    const { history, to, onClick } = this.props
    console.log(this.props)
    onClick && onClick(event)
    to && history.push(to)
  }
}

export default ReactRouter.withRouter(NextButton)
