// @flow strict
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Album from '..';

describe('Album', () => {
  test('displays all cards', () => {
    const props = {
      mediaCards: [
        {
          artistName: 'test-artist',
          collectionName: 'test-album',
          trackId: '123',
          trackName: 'test-track',
          artworkUrl100: 'http://test-url',
          artistViewUrl: '',
        },
        {
          artistName: 'test-artist2',
          collectionName: 'test-album2',
          trackId: '456',
          trackName: 'test-track2',
          artworkUrl100: 'http://test-url2',
          artistViewUrl: '',
        }],
    };

    render(<Album {...props} />);

    const card1Artist = screen.getByText(props.mediaCards[0].artistName);
    const card2Artist = screen.getByText(props.mediaCards[1].artistName);

    expect(card1Artist).toBeInTheDocument();
    expect(card2Artist).toBeInTheDocument();
  });
});
