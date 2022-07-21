import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/stores';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const renderHome = () =>
  render(
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>,
  );

describe('User can see Navbar at Screen', () => {
  beforeEach(() => {
    jest.mock('./mock');
  });
  test('user can see title', () => {
    renderHome();
    expect(screen.getByText('Table User List - Sabi')).toBeInTheDocument();
  });
});

describe('User can see Content', () => {
  test('user can see Top Artist on screen', () => {
    renderHome();
    expect(screen.getByText('Top Artist')).toBeInTheDocument();
  });
  test('user can see Top Track on screen', () => {
    renderHome();
    screen.debug(null, 99999999);

    expect(screen.getByText('Top Tracks')).toBeInTheDocument();
  });
});
