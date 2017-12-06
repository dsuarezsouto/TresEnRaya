import React from 'react';
import './../assets/scss/main.scss';

import './Casilla'
import Casilla from "./Casilla";
export default class Tablero extends React.Component {

    constructor(props){
        super(props);
        this.tableroClick = this.tableroClick.bind(this);
    }

    tableroClick(indiceFila,indiceColumna){
        this.props.appClick(indiceFila,indiceColumna)
    }
    render() {
        let tablero = this.props.valores.map((valoresFila, indiceFila) => {

            let fila = valoresFila.map((valor, indiceColumna) => {
                let myKey = "" + indiceFila + indiceColumna;

                return (
                    <Casilla myKey={myKey} valor={valor} tableroClick={this.tableroClick} indiceFila={indiceFila} indiceColumna={indiceColumna}/>
                );
            });
            return (
                <div key={"fila" + indiceFila}>{fila}</div>
            )

        });

        return (
            <div>{tablero}</div>
        )
    }
}