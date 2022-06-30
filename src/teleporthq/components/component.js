import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1">
        <button className="button">
          <span className="">{props.text1}</span>
          <br className=""></br>
          <span className="">{props.text2}</span>
          <br className=""></br>
          <span className="">{props.text3}</span>
        </button>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image-er"
      />
      <button className="component-button1 button">{props.button1}</button>
      <div className="component-container2">
        <div className="component-container3">
          <div className="component-container4">{props.children}</div>
        </div>
      </div>
      <div className="component-container5"></div>
    </div>
  )
}

AppComponent.defaultProps = {
  button1: 'Button',
  text2: 'Headifdfefhtmtk',
  rootClassName: '',
  image_alt: 'image',
  text1: 'aaa bb ccc',
  text: 'Text',
  text3: 'gmtkngffff',
  button: 'Button',
  button2: 'Button',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'Heading',
  heading: 'Heading',
}

AppComponent.propTypes = {
  button1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default AppComponent
