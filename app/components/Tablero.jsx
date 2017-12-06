import React from 'react';
import './../assets/scss/main.scss';

import './Casilla'
import Casilla from "./Casilla";
export default class Tablero extends React.Component {
    render() {
        let tablero = this.props.valores.map((valoresFila, indiceFila) => {

            let fila = valoresFila.map((valor, indiceColumna) => {
                let myKey = "" + indiceFila + indiceColumna;

                return (
                    <Casilla myKey={myKey} valor={valor}/>
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