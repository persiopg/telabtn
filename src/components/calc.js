import React, {Component} from 'react';
import './calc.css';

 class Calc extends Component{

    constructor(props){
        super(props);

        this.state = {
            valorinicial: 0,
        }

        this.calcular = this.calcular.bind(this);
    }

    calcular(e){
        var x = parseInt(this.state.valorinicial);
        var y = parseInt(this.props.valor);
        
        
        if("somar" === e){
            let valorinicial  = x + y;
            this.setState({valorinicial});
            console.log(this.state.valorinicial);
        }else if("subt" === e){
            let valorinicial  = x - y;
            this.setState({valorinicial});
            console.log(this.state.valorinicial);
        }

        
    }

    render(){
        return(
            <div className="calcular">
                <h1>{this.state.valorinicial}</h1>    
                <input type="button" value="decrementar" onClick={() => this.calcular("subt")}></input>
                <input type="button" value="incrementar" onClick={() => this.calcular("somar")}></input>
            </div>
        )
    }
}

export default Calc;