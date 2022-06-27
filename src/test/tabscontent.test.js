import { render, screen } from '@testing-library/react';
import TabsContent from '../components/TabsContent';

const dataTrackList = [
  {
    name: 'TrackList',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
    ],
  },
  {
    name: 'ArtistList',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
    ],
  },
];

const dataArtisList = [
  {
    name: 'ArtistOne',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
    ],
  },
  {
    name: 'ArtistTwo',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
    ],
  },
];

describe('User can see Tabs has a List', () => {
  test('user can see track list tab', () => {
    render(<TabsContent activeTab={0} dataTopTrack={dataTrackList} />);
    screen.debug(null, 9999999);
    expect(screen.getByText('TrackList')).toBeInTheDocument();
    expect(screen.getByText('ArtistList')).toBeInTheDocument();
  });

  test('user can see artist list tab', () => {
    render(<TabsContent activeTab={1} dataTopArtist={dataArtisList} />);
    screen.debug(null, 9999999);
    expect(screen.getByText('ArtistOne')).toBeInTheDocument();
    expect(screen.getByText('ArtistTwo')).toBeInTheDocument();
  });
});
