import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Serch" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/16259655?v=4" alt="Avatar" />
      Pedro Azevedo
    </User>
  </Container>
);

export default Header;
