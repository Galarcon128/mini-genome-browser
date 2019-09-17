import React, { Component } from 'react'
import GeneData from './inner_Components/resources/GeneData.json'
import DrawGene from './inner_Components/GenomeBrowserMINI'

export default class MiniGB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      gen: {},
      genes: []
    }
  }
  _onChangeQuery = (event) => {
    this.setState({ query: event.target.value })
    this.setState({ gen: this._onS(event.target.value) })
  }

  _onS = (s) => {
    let find = GeneData.Genes.find(Genes => Genes.name === s)
    console.log(find)
    return find
  }

  render() {
    return (
      <div>
        <h1>Gene Search </h1>
        <input type='text' name='TitleMap'
          value={this.state.query}
          onChange={(event) => this._onChangeQuery(event)} />
        <button onClick={this._onS}>Search</button>
        <button>config</button>
        <DrawGene GeneData={this.state.gen} />
      </div>
    )
  }
}
