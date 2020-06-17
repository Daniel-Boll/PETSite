import React, {Component} from 'react';
import RadarChart from 'react-svg-radar-chart';
import '../../css/RadarChart.css';

class Radar extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          data: {
            battery: 0.7,
            design: .8,
            useful: 0.9,
            speed: 0.67,
            weight: .9
          },
          meta: { color: 'white' }
        },
      ],
      captions: {
        // columns
        battery: 'How beautiful',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
        weight: 'Brain'
      },
      defaultOptions: {
        size: 200,
        axes: true, // show axes?
        scales: 3, // show scale circles?
        captions: true, // show captions?
        captionMargin: 10,
        dots: false, // show dots?
        zoomDistance: 1.2, // where on the axes are the captions?
        setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
        //smoothing: noSmoothing, // shape smoothing function
        axisProps: () => ({ className: 'axis' }),
        scaleProps: () => ({ className: 'scale', fill: 'none' }),
        shapeProps: () => ({ className: 'shape' }),
        captionProps: () => ({
          className: 'caption',
          textAnchor: 'middle',
          fontSize: 10,
          fontFamily: 'sans-serif'
        }),
        dotProps: () => ({
          className: 'dot',
          mouseEnter: (dot) => { console.log(dot) },
          mouseLeave: (dot) => { console.log(dot) }
        })
      },
    }
  }

  noSmoothing = (points) => {
    let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
      d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
    }
    return d + 'z';
  }

  render(){
    return(
      <>
        <RadarChart
          captions={this.state.captions}
          data={this.state.data}
          size={250}
          options={this.state.defaultOptions}
        />
      </>
    );
  }

}

export default Radar;