import React from 'react';
import './../assets/scss/main.scss';



export default class Cabecera extends React.Component {
    render(){
        return(
            <header className="cabecera">
                {this.props.texto}
            </header>
        )
    }

}