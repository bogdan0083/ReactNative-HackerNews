// @flow
import React from 'react';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Headline from 'common/components/headline';
import Story from 'common/components/story';
import {
  mapScreenPropsToProps,
  mapNavigationStateParamsToProps,
} from 'common/navigation';

import type { StoriesType } from 'types/story.types';
import type { NavigationType } from 'types/navigation.types';

type Props = {
  stories: StoriesType,
  fetchStories: () => void,
  navigation: NavigationType,
};

type State = {
  refreshing: boolean,
};

class Headlines extends React.Component<Props, State> {
  static navigationOptions: any;
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }
  componentDidMount() {
    this.props.fetchStories();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchStories();
    this.setState({ refreshing: false });
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.stories}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={this.props.stories}
          renderItem={({ item }) => (
            <Headline
              {...item}
              viewDetails={() => navigate('Details', { story: item })}
            />
          )}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }
}

Headlines.navigationOptions = {
  header: null,
};

const Stories = StackNavigator(
  {
    Home: {
      screen: mapScreenPropsToProps(Headlines),
      header: null,
    },
    Details: {
      screen: mapNavigationStateParamsToProps(Story),
    },
  },
  { initialRouteName: 'Home', headerMode: 'screen' }
);

export default Stories;

const styles = StyleSheet.create({
  stories: {
    backgroundColor: '#F6F6EF',
  },
});
