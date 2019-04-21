import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Sandy-Junior-2001.jpg/220px-Sandy-Junior-2001.jpg"
        alt="Playlist"
      />
      <div>
        <span>Playlist</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duracação" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>4 Estações</td>
          <td>Sandy & Junior</td>
          <td>4 Estações</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
