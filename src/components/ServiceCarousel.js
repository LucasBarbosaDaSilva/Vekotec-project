import React, { Component } from "react";
import Slider from "react-slick";
import { trator, cerca, documento, globo } from '../css/img/svg'

export default class ServiceCarousel extends Component {
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
      <div
        id='services'
      >
        <h1>CONHEÇA NOSSOS SERVIÇOS</h1>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
        >
          <div
            className='service-icon-div'
          >
            <img
              className='service-icon'
              src={trator}
              alt='trator icon'
            />
          </div>
          <div
            className='service-icon-div'
          >
            <img
              className='service-icon'
              src={documento}
              alt='document icon'
            />
          </div>
          <div
            className='service-icon-div'
          >
            <img
              className='service-icon'
              src={globo}
              alt='globe icon'
            />
          </div>
          <div
            className='service-icon-div'
          >
            <img
              className='service-icon'
              src={cerca}
              alt='fence icon'
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div
            className='service-div'
          >
            <h2>
              SUPRESSÃO DE VEGETAÇÃO NATIVA E PLANTADA
            </h2>
          </div>
          <div
            className='service-div'
          >
            <h2>
              REGULARIZAÇÃO DO IMÓVEL PREFEITURA,
              CAR,
              OUTORGA
            </h2>
          </div>
          <div
            className='service-div'
          >
            <h2>
              GEOREFERENCIAMENTO RURAL COM CERTIFICAÇÃO INCRA,
              GEOREFERENCIAMENTO URBANO NO REGISTRO DE IMÓVEIS,
            </h2>
          </div>
          <div
            className='service-div'
          >
            <h2>
              LOCAÇÃO DE CERCA
            </h2>
          </div>
        </Slider>
      </div>
    );
  }
}