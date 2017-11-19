// @flow

type CommentLoadingType = {
  by?: ?string,
  id?: ?number,
  text?: ?string,
  time?: ?number,
  kids?: ?Array<number>,
  _loaded?: false,
  _loading: true,
};

type CommentNotLoadedType = {
  by?: ?string,
  id?: ?number,
  text?: ?string,
  time?: ?number,
  kids?: ?Array<number>,
  _loaded?: false,
  _loading: false,
};

export type CommentLoadedType = {
  by: string,
  id: number,
  text: string,
  time?: number,
  kids?: Array<number>,
  _loaded?: true,
  _loading?: ?false,
};

export type CommentType =
  | CommentLoadedType
  | CommentLoadingType
  | CommentNotLoadedType;
