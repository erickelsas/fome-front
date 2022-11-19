import React from "react";
import './OrderAttendant.css';
import Modal from "react-bootstrap/Modal";

  
class OrderAttendant extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    modal: false,
    modalScreen: 0,
    name: "",
    modalInputName: "",
    table: '1',
    hour: '21:30',
    products: 'X-Ratão, suco de laranja, água',
    price: '39,90',
    id: '01',
    cpf: "123.456.789.10"
  };
}

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
};

handleSubmit = () => {
  this.setState({ name: this.state.modalInputName, modalScreen: 1 });
};

modalOpen = () => {
  this.setState({ modal: true });
};

modalClose = () => {
  this.setState({
    modalInputName: "",
    modal: false,
    modalScreen: 0
  });

}


  render() {
    const {modal, modalScreen, table, hour, products, price, id, cpf} = this.state;
    console.log(table);
    return(
    <div className='orderAtt-component d-flex flex-column align-items center'>
        <div className='w-100 d-flex justify-content-between align-items-center header p-3'>
            <h1 className='mb-0 mt-0'>Mesa {table}</h1>
            <h2 className='mb-0 mt-0'>{hour}</h2>
        </div>
        <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-start body px-3 py-2'>
            <div className='d-flex flex-column justify-content-start w-100'>
                <h1>{products}</h1>
                <h1>{price}</h1>
            </div>
        </div>
        <div className='w-100 d-flex justify-content-end align-items-end footer p-2'>
        <button onClick={this.modalOpen}>Finalizar pedido</button>
        </div>
        
        <div className="App">
        <Modal show={modal} handleClose={(e) => this.modalClose(e)}>
          {modalScreen === 0 && (
            <>
              <h2>Mesa {table}</h2>
              <div className="details">
              <h4><span>{id} – {cpf} R${price}</span></h4>
              <p>{products}</p>
              <div className="modal-footer">
                <button onClick={this.handleSubmit}>
                  Pagamento
                  </button>
                </div>
              </div>
              <div className="details">
              <h4><span>{id} – {cpf} R${price}</span></h4>
              <p>{products}</p>
              <div className="modal-footer">
                <button onClick={this.handleSubmit}>
                  Pagamento
                  </button>
                </div>
              </div>
            </>
          )}
          {modalScreen === 1 && (
            <>
              <h2>ID: {id}</h2>
              <h4>{cpf}</h4>
              <div className="details">
              <p>{products}</p>
                <p>{price}</p>
                </div> 
                <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Selecionar forma de pagamento</option>
                  <option value="1">Pix</option>
                  <option value="2">Dinheiro</option>
                  <option value="3">Crédito</option>
                  <option value="4">Débito</option>
                </select>
                </div>
                <div className="modal-footer"> 
                <button onClick={this.handleSubmit}>
                  Finalizar
                </button>
                </div>
            </>
          )}
        </Modal>
      </div>

    </div>
    );
  }
}

export default OrderAttendant

