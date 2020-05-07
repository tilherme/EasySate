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
      <table className="content-table">
      <thead>
      <tr>
      <th>Codigo</th>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quant</th>
      <th>Total</th>
      </tr>
      </thead>
      
      <tbody>
      <tr>
      <td>100</td>
      <td>carro</td>
      <td>des</td>
      <td>1</td>
      <td>R$ 5000,00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      <tr>
      <td>1</td>
      <td>geladeira</td>
      <td>geladeira 2 portas</td>
      <td>2</td>
      <td>R$ 1500.00</td>
      </tr>
      
      </tbody>
      </table> 
      
      <section id= "valor">      
      <div className= "telaValores">
      <div id="quant"> Quantidade
      <p></p>
      </div>
      <div id="prod">Produto
      <p></p>
      </div>
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
  