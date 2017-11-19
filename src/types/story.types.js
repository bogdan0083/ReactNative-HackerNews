// @flow

type StoryLoadingType = {
  kids?: ?Array<number>,
  id?: ?number,
  title?: ?string,
  by?: ?string,
  score?: ?number,
  url?: ?string,
  descendants?: ?number,
  _loading: true,
  _loaded?: ?false,
};

type StoryLoadedType = {
  kids?: Array<number>,
  id: number,
  title: string,
  by: string,
  score: number,
  url?: string,
  descendants?: number,
  _loading?: false,
  _loaded?: true,
};

export type StoryType = StoryLoadedType | StoryLoadingType;

export type StoriesType = Array<StoryType>;
