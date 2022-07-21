import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

const renderSearch = (value) => render(<Search value={value} />);

describe('User can see Search bar at Screen', () => {
  test('user can type search', () => {
    renderSearch('Mat');
    expect(screen.getByPlaceholderText('Search')).toHaveValue('Mat');
  });
});
