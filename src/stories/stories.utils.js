// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { fetchIds } from 'stories/stories.actions';
import { getStoriesOfType } from 'stories/stories.selectors';

import type { ReactComponentWithNavigationType } from 'types/navigation.types';

export const withStoryData = (
  Component: ReactComponentWithNavigationType,
  type: string = 'top'
) => {
  const WithStoryData = ({ fetchStories, stories }) => (
    <Component stories={stories} fetchStories={fetchStories} />
  );

  const mapStateToProps = state => ({
    stories: getStoriesOfType(type)(state),
  });

  const mapDispatchToProps = dispatch => ({
    fetchStories: () => {
      dispatch(fetchIds({ type }));
    },
  });

  WithStoryData.navigationOptions = Component.navigationOptions;

  return connect(mapStateToProps, mapDispatchToProps)(WithStoryData);
};
