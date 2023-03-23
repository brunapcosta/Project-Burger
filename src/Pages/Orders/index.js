import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Package from "../../assets/package.png";
import Trash from "../../assets/trash.png";

import H1 from '../../Components/Title';
import Button from '../../Components/Button/';

import {
  Container,
  Image,
  ContainerItems,
  Order,
  Div,
  P1,
  P2,
  Delete
} from "./styles";

const Requisitions = () => {

  const [orders, setOrders] = useState([]);
  const history = useHistory()


  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrder } = await axios.get("http://localhost:3001/orders")

      setOrders(newOrder)
    }

    fetchOrders()

  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId);

    setOrders(newOrder);
  }

  function goBackPage(){
    history.push("/")
  }
  return (
    <Container>
      <Image alt='logo-image' src={Package} />

      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {
            orders.map(order => (
              <Order key={order.id}>
                <Div>
                  <P1>{order.name}</P1>
                  <br />
                  <P2>{order.requisition}</P2>
                </Div>
                <Delete>
                  <button onClick={() => deleteOrder(order.id)}>
                    <img src={Trash} alt="cancelar pedido" />
                  </button>
                </Delete>
              </Order>
            ))
          }
        </ul>
        <Button isBack={true} onClick={goBackPage} > Voltar</Button>
      </ContainerItems>

    </Container>
  )

};

export default Requisitions;