import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="fogot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar uma conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SingIn;
