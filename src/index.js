import * as d3 from 'd3'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const W = 500
const H = 500

export default class DrawGeneInfo extends Component {
  static propTypes = {
    GeneData: PropTypes.object
  }

  componentDidMount() {
    this.draw(this.props.GeneData)
  }

  draw (GeneData) {
    d3.select('#visual').select('svg').remove()
    const svg = d3.select('#visual').append('svg')
      .attr('width', W + 20)
      .attr('height', H + 20)
    // eslint-disable-next-line no-unused-vars
    let img = svg.append('svg:image')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', W)
      .attr('height', H)
      .attr('fill', 'cyan')
      .attr('xlink:href', 'https://i.ibb.co/xHMV2N3/genome-IMG.png')
    // eslint-disable-next-line no-unused-vars
    if (JSON.stringify(GeneData) !== JSON.stringify({})) {
      // eslint-disable-next-line no-unused-vars
      let text = svg.append('text').text(GeneData.name).attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', W / 2)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '50px')
      text = svg.append('text').text(GeneData.id)
        .attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', (W / 2) - 50)
        .attr('font-family', 'sans-serif')
        .attr('fill', 'blue')
        .attr('font-size', '35px')
      text = svg.append('text').text('position left: ' + GeneData.posL)
        .attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', (W / 2) + 50)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '30px')
      text = svg.append('text').text('position Rigth: ' + GeneData.posR)
        .attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', (W / 2) + 100)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '30px')
      text = svg.append('text').text('Strand: ' + GeneData.strand)
        .attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', (W / 2) + 150)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '30px')
      animateGenome()
    } else {
      // eslint-disable-next-line no-unused-vars
      let text = svg.append('text').text('Item not found')
        .attr('text-align', 'left')
        .attr('x', (W / 2) / 2)
        .attr('y', (W / 2) - 50)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '30px')
    }
    function animateGenome() {
      let duration = 2500
      svg.select('#genome')
        .transition()
        .duration(duration)
        .attr('transform-origin', (W / 2) + ' ' + (W / 2))
        .attr('transform', 'rotate(20)')
        .transition()
        .duration(duration)
        .attr('transform', 'rotate(0)')
        .on('end', animateGenome)
        // at end, call it again to create infinite loop
    }
  }

  render() {
    return (
      <div id='visual'>
        {this.draw(this.props.GeneData)}
      </div>
    )
  }
}

DrawGeneInfo.defaultProps = {
  GeneData: {}
}
