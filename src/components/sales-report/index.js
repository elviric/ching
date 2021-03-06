/* eslint-disable */
import React from 'react'
import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'
import * as ReactReduxFirebase from 'react-redux-firebase'
import selectors from 'redux/selectors'
import PropTypes from 'prop-types'

import SalesTable from './sales-table'

class SalesReport extends React.PureComponent {
  render() {
    const { items } = this.props
    console.log(this.props)
    return (
      <div>
        <SalesTable items={items} />
      </div>
    )
  }
}

SalesReport.propTypes = {
  items: PropTypes.object,
}

const mapStateToProps = state => ({
  items: selectors.getItemsState(state),
})

export default Redux.compose(
  ReactRedux.connect(mapStateToProps),
  ReactReduxFirebase.firestoreConnect(props => {
    if (!props.auth || !props.auth.uid) return []
    return [
      {
        collection: 'items',
        where: [['userId', '==', props.auth.uid]],
      },
    ]
  })
)(SalesReport)
