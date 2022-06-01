// @flow strict
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import MediaCard from '..';

describe('MediaCard', () => {
  test('displays correctly', () => {
    const props = {
      artistName: 'test-artist',
      collectionName: 'test-album',
      trackName: 'test-track',
      artworkUrl100: 'http://test-url',
      trackId: '123',
      artistViewUrl: '',
    };

    render(<MediaCard {...props} />);

    const artist = screen.getByText(props.artistName);
    const collection = screen.getByText(props.collectionName);
    const track = screen.getByText(props.trackName);
    const image = screen.getByAltText(`${props.artistName}-${props.trackName}-${props.collectionName}`);

    expect(artist).toBeInTheDocument();
    expect(collection).toBeInTheDocument();
    expect(track).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.artworkUrl100);
  });
});
