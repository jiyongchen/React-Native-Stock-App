import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMostActive } from '../../store/actions/'

import List from '../List'

class MostActive extends Component {
  onRefresh = () => this.props.getMostActive()

  componentDidMount = () => this.props.getMostActive()

  render() {
    const { data, loading } = this.props.mostActive

    return (
      <List loading={loading} list={data} />
    )
  }
}

const mapStateToProps = state => ({
  mostActive: state.mostActive
})

const mapDispatchToProps = {
  getMostActive
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostActive)
