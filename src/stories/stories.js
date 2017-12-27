import React from 'react';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HeadlineCard as Headline } from 'common/components/headline';
import { colors } from 'common/constants';
import Story from 'stories/story.ui';
import {
  mapScreenPropsToProps,
  mapNavigationStateParamsToProps,
} from 'common/navigation';

class Headlines extends React.Component {
  state = { refreshing: false, viewableItems: new Set() };

  componentDidMount() {
    this.props.fetchStories();
  }

  _onRefresh = this._onRefresh.bind(this);

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchStories();
    this.setState({ refreshing: false });
  }

  render() {
    const {
      props: { navigation: { navigate }, stories, fetchItemForId },
      state: { refreshing },
      _onRefresh,
    } = this;
    return (
      <View style={styles.stories}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
          }
          data={stories}
          renderItem={({ item, index }) => (
            <View style={styles.headlineContainer}>
              <Headline
                onPress={() => navigate('Details', { story: item })}
                {...item}
                isViewable={this.state.viewableItems.has(index)}
                fetchItemForId={fetchItemForId}
              />
            </View>
          )}
          keyExtractor={(item, index) => index}
          onViewableItemsChanged={({ viewableItems }) => {
            this.setState({
              viewableItems: new Set(viewableItems.map(item => item.index)),
            });
          }}
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
    backgroundColor: colors.background,
  },
  headlineContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
  },
});
