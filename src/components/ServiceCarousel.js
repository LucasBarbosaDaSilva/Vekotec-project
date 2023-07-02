import React, { Component } from "react";
import Slider from "react-slick";
import { servicesArray } from '../css/img/svg/service-carousel'
import '../css/service-carousel.css'

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
        <h1 >CONHEÇA NOSSOS SERVIÇOS</h1>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
        >
          {servicesArray.map(service => (
            <div
            key={service.name}
              className='service-icon-div'
            >
              <img
                className='service-icon'
                src={service.icon}
                alt={`${service.name} icon`}
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {servicesArray.map(service => (
            <div
              key={service.name}
              className='service-div'
            >
              {service.content.map(content => (
                <div
                  key={content.title}
                  className='service-content-div'
                >
                  <h2>
                    {content.title}
                  </h2>
                  <p>
                    {content.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}