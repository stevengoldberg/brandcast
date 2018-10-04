import React, { Component } from 'react'

class NodeView extends Component {
  render() {
    console.log(this.props)
    const { node } = this.props
    return <div>{node.props.name}</div>
  }
}

export default NodeView