import React from 'react';
import './../assets/scss/main.scss';



const styleCasilla={
    height:'100 px',
    width:'100 px'
};
export default class Casilla extends React.Component {
    render() {
        return (
            <button style={styleCasilla} key={this.props.myKey}>{this.props.valor}</button>
        )
    }
}