import create from 'zustand';
import {searchNewsByText} from './news.service';
import {Root} from './news.types';

interface newsStore {
  news?: Root;
  historic: string[];
  isLoading: boolean;
  isError: boolean;
  getNews: (text: string) => void;
}

const useGetNewsByText = create<newsStore>(set => ({
  news: undefined,
  historic: [],
  isLoading: false,
  isError: false,
  getNews: async (text: string) => {
    set({isLoading: true});
    try {
      const news = await searchNewsByText(text);
      set({news, isLoading: false});
    } catch {
      set({isLoading: false, isError: true});
    }
  },
}));

export {useGetNewsByText};
