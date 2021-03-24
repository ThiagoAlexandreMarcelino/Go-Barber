import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Singup: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default Singup;
