import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import queryApi from '../util/apiClient';
import type { AppleResponse, Media, QueryParams } from '../types';

export type State = {
  loading: boolean;
  results: Media[];
  searchTerm: string;
};

export const UPDATE_MEDIA_ACTION = 'media/fetchResults';
export const UPDATE_MEDIA_PENDING = 'media/fetchResults/pending';
export const UPDATE_MEDIA_COMPLETE = 'media/fetchResults/fulfilled';

const initialState: State = {
  loading: false,
  results: [],
  searchTerm: '',
};

type Payload = {
  results: Media[],
  searchTerm: string,
};

export const fetchPosts: any = createAsyncThunk(
  UPDATE_MEDIA_ACTION,
  async (args: QueryParams): Promise<Payload> => {
    const response: AppleResponse = await queryApi(args.searchTerm.split(' '), args.offset, args.limit);
    const mappedResults = response.results.map((result) => ({
      artistName: result.artistName,
      artistViewUrl: result.artistViewUrl,
      artworkUrl100: result.artworkUrl100,
      collectionName: result.collectionName,
      trackName: result.trackName,
    }));
    return {
      results: mappedResults,
      searchTerm: args.searchTerm,
    };
  },
);

// eslint-disable-next-line @typescript-eslint/default-param-last
const mediaReducer = (state: State = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEDIA_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MEDIA_COMPLETE:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: mediaReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
