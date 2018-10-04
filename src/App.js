import React, { Component } from 'react'
import _ from 'lodash'
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

  addNode = parentId => {
    const id = uuidv1()
    this.setState(state => ({
      ...state,
      [id]: {
        id,
        parentId,
        props: {}
      }
    }))
  }

  removeNode = id => {
    this.setState(state => _.omit(state, { id }))
  }

  render() {
    return <TreeView nodesById={this.state} />
  }
}

export default TreeContainer
