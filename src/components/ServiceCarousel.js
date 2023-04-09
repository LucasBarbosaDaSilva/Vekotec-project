import React, { Component } from "react";
import Slider from "react-slick";
import { trator, cerca, documento, globo } from '../css/img/svg'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h4>SERVIÇOS</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
        >
          <div>
            <img
              src={trator}
              alt=''
            />          </div>
          <div>
            <img
              src={documento}
              alt=''
            />
          </div>
          <div>
            <img
              src={globo}
              alt=''
            />
          </div>
          <div>
            <img
              src={cerca}
              alt=''
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img
              src={trator}
              alt=''
            />
          </div>
          <div>
            <img
              src={documento}
              alt=''
            />
          </div>
          <div>
            <img
              src={globo}
              alt=''
            />
          </div>
          <div>
            <img
              src={cerca}
              alt=''
            />
          </div>
        </Slider>
      </div>
    );
  }
}