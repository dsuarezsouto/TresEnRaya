import React from 'react';
import './../assets/scss/main.scss';

import './Cabecera'
import Cabecera from "./Cabecera";
import './Tablero'
import Tablero from "./Tablero";


const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
export default class App extends React.Component {

  constructor(promps){
    super(promps);
    this.state={
          turno: JUGADORX,
          valores: [
              ['-','-','-'],
              ['-','-','-'],
              ['-','-','-']
          ]
    };
  }

  render() {

    let texto = "El turno es para el "+this.state.turno;
    return(
        <div>
          <Cabecera texto={texto}/>
           <Tablero valores={this.state.valores}/>
        </div>
    );
  }

}

