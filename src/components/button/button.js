import React from 'react'
import './button.css'

const alertClick = (label) => {
    alert(`A label desse botão é ${label}`)
}

class Button extends React.Component {
    render() {
        return <button className='btn'  onClick={() => alertClick(this.props.label)}>{this.props.label}</button>
    }
}

export default Button