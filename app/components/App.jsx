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
          ]
    };
    this.appClick= this.appClick.bind(this)
  }

  appClick(indiceFila,indiceColumna){
    let nuevosValores=this.state.valores;
    let valor = this.state.turno === JUGADORX ? 'X' : '0';

    nuevosValores[indiceFila][indiceColumna] = valor;

    this.setState(
        {
            turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
            valores:nuevosValores
        }
    )


  }

  render() {

    let texto = "El turno es para el "+this.state.turno;
    return(
        <div>
          <Cabecera texto={texto}/>
           <Tablero valores={this.state.valores} appClick={this.appClick}/>
        </div>
    );
  }

}

