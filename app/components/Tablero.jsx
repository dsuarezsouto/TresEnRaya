import React from 'react';
import './../assets/scss/main.scss';

const styleCasilla={
    height:'100 px',
    width:'100 px'
};
export default class Tablero extends React.Component {
    render() {
        let tablero = this.props.valores.map((valoresFila, indiceFila) => {

            let fila = valoresFila.map((valor, indiceColumna) => {
                let myKey = "" + indiceFila + indiceColumna;

                return (
                    <button style={styleCasilla} key={myKey}>{valor}</button>
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