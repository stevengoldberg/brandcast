import React, { Component } from 'react'

class NodeView extends Component {
  render() {
    const { node, addChild, removeNode } = this.props
    return (
      <div className="row">
        {node.props.name}
        <div className="add" onClick={() => addChild(node.id)}>+</div>
        <div className="remove" onClick={() => {
          removeNode(node.id)
        }}>-</div>
      </div>
    )
  }
}

export default NodeView