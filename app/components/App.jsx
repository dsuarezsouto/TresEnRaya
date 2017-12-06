import React from 'react';
import './../assets/scss/main.scss';



export default class App extends React.Component {

  constructor(promps){
    super(promps);
    this.state={
          valores: [
              ['-','-','-'],
              ['-','-','-'],
              ['-','-','-']
          ]
    };
  }

  render() {
    let tablero = this.state.valores.map((valoresFila,indiceFila)=>{

      let fila = valoresFila.map((valor,indiceColumna)=>{
        let myKey = ""+indiceFila+indiceColumna;

        return(
          <span key={myKey} >{valor}</span>
        );
      });
      return(
          <div key={"fila"+indiceFila}>{fila}</div>
      )

    });
    return(
        <div>
          <h2>Tres En Raya</h2>
           <p>{tablero}</p>
        </div>
    );
  }

}

