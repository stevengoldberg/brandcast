import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import TreeView from './TreeView'

class TreeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      1: {
        id: 1,
        props: {
          name: 'bob',
        },
        parentId: null,
      },
      2: {
        id: 2,
        props: {
          name: 'susan',
        },
        parentId: 1,
      },
      3: {
        id: 3,
        props: {
          name: 'bill',
        },
        parentId: 1,
      },
      4: {
        id: 4,
        props: {
          name: 'sally',
        },
        parentId: 2,
      },
    }
  }

  addChild = parentId => {
    const id = uuidv1()
    this.setState({
      ...this.state,
      [id]: {
        id,
        parentId,
        props: {
          name: 'jim'
        }
      }
    })
  }

  removeNode = id => {
    this.setState(state => ({
      ...state,
      [id]: undefined,
    }))
  }

  render() {
    return (
      <TreeView
        nodesById={this.state}
        addChild={this.addChild}
        removeNode={this.removeNode}
      />
    )
  }
}

export default TreeContainer
