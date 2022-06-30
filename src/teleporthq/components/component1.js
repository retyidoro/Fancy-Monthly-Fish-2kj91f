import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <div className="component1-container1">
        <div className="component1-container2">{props.children}</div>
        <h1 className="component1-text">{props.heading1}</h1>
      </div>
      <span className="">Text</span>
      <span className="">Text</span>
      <input type="radio" name="radio" className="" />
      <select className="">
        <option value="Option 1" className="">
          Option 1
        </option>
        <option value="Option 2" className="">
          Option 2
        </option>
        <option value="Option 3" className="">
          Option 3
        </option>
      </select>
      <select className="">
        <option value="Option 1" className="">
          Option 1
        </option>
        <option value="Option 2" className="">
          Option 2
        </option>
        <option value="Option 3" className="">
          Option 3
        </option>
      </select>
      <h1 className="">Heading</h1>
      <button className="button">Button</button>
    </div>
  )
}

Component1.defaultProps = {
  heading1: 'Heading',
  rootClassName: '',
  button: 'Button',
  text: 'Text',
  heading: 'Heading',
}

Component1.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Component1
