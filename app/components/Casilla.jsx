import React from 'react';
import './../assets/scss/main.scss';



const styleCasilla={
    height:'100 px',
    width:'100 px'
};
export default class Casilla extends React.Component {
    constructor(props){
        super(props)
        this.casillaClick= this.casillaClick.bind(this)

    }
    casillaClick(){
        if(this.props.valor =='-'){
            this.props.tableroClick(this.props.indiceFila,this.props.indiceColumna)
        }
    }
    render() {
        return (
            <button style={styleCasilla} className={this.props.valor === '-' ? "clickable":"noClickable"} onClick={this.casillaClick}>{this.props.valor}</button>
        )
    }
}