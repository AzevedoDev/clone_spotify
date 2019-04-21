import React from 'react';

import {
  Container, Title, List, Plalist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Plalist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Sandy-Junior-2001.jpg/220px-Sandy-Junior-2001.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa</p>
      </Plalist>
      <Plalist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Sandy-Junior-2001.jpg/220px-Sandy-Junior-2001.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa</p>
      </Plalist>
      <Plalist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Sandy-Junior-2001.jpg/220px-Sandy-Junior-2001.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa</p>
      </Plalist>
      <Plalist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Sandy-Junior-2001.jpg/220px-Sandy-Junior-2001.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa</p>
      </Plalist>
    </List>
  </Container>
);

export default Browse;
