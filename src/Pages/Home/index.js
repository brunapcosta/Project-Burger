import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Logo from "../../assets/logo.png";

import { H1 } from '../../Components/Title/styles';
import { Button } from '../../Components/Button/styles';

import {
  Container,
  Image,
  ContainerItems,
  ContainerInput,
  InputLabel,
  Input
} from "./styles";

const Home = () => {

  // const orders = [];
  const [orders, setOrders] = useState([]);
  const inputName = useRef();
  const inputRequisition = useRef();
  const history = useHistory()


  async function makeNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      name: inputName.current.value,
      requisition: inputRequisition.current.value,
    })

    setOrders([...orders, newOrder])

    history.push("/orders")
  }

  return (
    <Container>
      <Image alt='logo-image' src={Logo} />

      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <ContainerInput>
          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputName} placeholder='Steve Jobs' />

          <InputLabel>Pedido</InputLabel>
          <Input ref={inputRequisition} placeholder='1 Coca-Cola, 1-X Salada' />
        </ContainerInput>

        <Button to="/orders" onClick={makeNewOrder}>Novo Pedido</Button>

      </ContainerItems>

    </Container>
  )

};

export default Home;