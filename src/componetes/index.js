import React, { Component } from 'react';
import './style.css'

export default class venda extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
      <div className= "caixa">
        <div id="componentes">
         <p>CODIGO</p>
           <p>ITEM</p>
          <p>DESCRIÇÃO</p>
          <p> UNIDADE </p>
          <p> QUANT </p>
          <p> PREÇO </p>
          <p>TOTAL</p>
        </div>
    </div>

       
<section id= "valor">      
<div className= "telaValores">
  <h2 id="quant"> Quantidade</h2>
     <p></p>
    <h2 id="prod">Produto</h2>
   <p></p>
    <h2 id="preco"> preço de venda</h2>
    <p></p>
    <h2 id ="total">Total</h2>
    <p></p>
 </div>

</section>
      </>
    );
  }
}
