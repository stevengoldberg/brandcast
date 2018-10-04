import React, { Component } from 'react'
import _ from 'lodash'
import NodeView from './NodeView'
import './App.css'

class TreeView extends Component {
  buildTree = nodesById => {
    const compactNodes = _.pickBy(nodesById)
    const tree = []
    const rootNode = _.find(compactNodes, { parentId: null })
    const findChildren = node => {
      debugger
      const children = _.filter(compactNodes, currentNode => node.id === currentNode.parentId)
      return children.map(child => ({
        ...child,
        children: findChildren(child)
      }))
    }
    tree.push({
      ...rootNode,
      children: findChildren(rootNode)
    })
    return tree
  }

  constructNodeList = node => {
    const { addChild, removeNode } = this.props
    if (_.get(node, 'children.length')) {
      return (
        <div key={node.id}>
          <NodeView node={node} addChild={addChild} removeNode={removeNode} />
          <div style={{ paddingLeft: '20px' }}>
            {
              node.children.map(node => this.constructNodeList(node))
            }
          </div>
        </div>
      )
    }
    return <NodeView key={node.id} node={node} addChild={addChild} removeNode={removeNode} />
  }

  render() {
    const { nodesById } = this.props
    const tree = this.buildTree(nodesById)
    return <div>{this.constructNodeList(tree[0])}</div>
  }
}

export default TreeView