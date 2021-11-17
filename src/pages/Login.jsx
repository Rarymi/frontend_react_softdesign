import { Container, LoginButton } from 'modules/login/style';
import Book from 'assets/images/Book.svg';

import history from 'modules/shared/history';
import { useContext, useEffect, useState } from 'react';
import AuthService from 'modules/shared/services/AuthService';
import UserService from 'modules/shared/services/UserService';
import { ScreenSizeContext } from 'modules/shared/contexts/ScreenSizeContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isMobile } = useContext(ScreenSizeContext);

  const login = () => {
    AuthService.authenticate(username, password);
    if (UserService.getLoggedUser()) history.push('/');
  };

  useEffect(() => {
    if (UserService.getLoggedUser()) history.push('/');
  }, []);

  return (
    <Container className="main-login" isMobile>
      {!isMobile && (
        <div className="left-login">
          <h1>
            Faça Login,
            <br /> E entre para o nosso clube
          </h1>

          <img className="left-login-image" src={Book} alt="" />
        </div>
      )}

      <div className="right-login">
        <div className="card-login">
          <h1>Login</h1>
          <div className="form--input">
            <div className="form--input">
              <label>Usuário/E-mail</label>
              <input
                placeholder="Usuário ou E-mail"
                onInput={(e) => setUsername(e.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="form--input">
            <div className="form--input">
              <label>Senha</label>
              <input
                placeholder="Senha"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </div>
          </div>

          <LoginButton onClick={() => login()}>Entrar</LoginButton>
        </div>
      </div>
    </Container>
  );
}
