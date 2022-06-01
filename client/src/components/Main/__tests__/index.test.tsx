// @flow strict
import * as React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Main from '..';

describe('Main', () => {
  test('displays all cards from mocked redux store', () => {
    const testState = {
      loading: false,
      results: [
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
      searchTerm: '',
    };

    const testStore = {
      getState: jest.fn(() => testState),
      dispatch: jest.fn(),
      subscribe: jest.fn(),
    };

    render(<Provider store={testStore}><Main /></Provider>);

    const card1Artist = screen.getByText(testState.results[0].artistName);
    const card2Artist = screen.getByText(testState.results[1].artistName);

    expect(card1Artist).toBeInTheDocument();
    expect(card2Artist).toBeInTheDocument();
  });
});
