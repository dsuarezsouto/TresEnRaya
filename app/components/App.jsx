import React from 'react';
import './../assets/scss/main.scss';

import './Cabecera'
import Cabecera from "./Cabecera";
import './Tablero'
import Tablero from "./Tablero";


const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
          turno: JUGADORX,
          valores: [
              ['-','-','-'],
              ['-','-','-'],
              ['-','-','-']
          ],
          movimientos:0
    };
    this.appClick= this.appClick.bind(this);
    this.resetClick= this.resetClick.bind(this)

  }

  appClick(indiceFila,indiceColumna){
    let nuevosValores=this.state.valores;
    let valor = this.state.turno === JUGADORX ? 'X' : '0';

    nuevosValores[indiceFila][indiceColumna] = valor;

    this.setState(
        {
            turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
            valores:nuevosValores,
            movimientos: this.state.movimientos + 1
        }
    )


  }
  resetClick(){

    this.setState({
        turno: JUGADORX,
        valores: [
            ['-','-','-'],
            ['-','-','-'],
            ['-','-','-']
        ],
        movimientos:0
    })
  }

  render() {

    let texto = "El turno es para el "+this.state.turno+".";
    return(
        <div>
          <Cabecera texto={texto}/>
          <Tablero valores={this.state.valores} appClick={this.appClick}/>
          <h3> Nº de movimientos: {this.state.movimientos}</h3>
          <button onClick={this.resetClick}>Reset</button>
        </div>
    );
  }

}

