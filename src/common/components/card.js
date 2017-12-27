import React from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

class Card extends React.Component {
  state = {
    scale: new Animated.Value(1),
    shadowRadius: new Animated.Value(5),
    shadowOffsetWidth: new Animated.Value(5),
    shadowOffsetHeight: new Animated.Value(5),
  };

  animateTouchIn() {
    Animated.timing(this.state.scale, {
      toValue: 0.98,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowRadius, {
      toValue: 0,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowOffsetWidth, {
      toValue: 0,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowOffsetHeight, {
      toValue: 0,
      duration: 100,
    }).start();
  }

  animateTouchOut() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowRadius, {
      toValue: 5,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowOffsetWidth, {
      toValue: 5,
      duration: 100,
    }).start();

    Animated.timing(this.state.shadowOffsetHeight, {
      toValue: 5,
      duration: 100,
    }).start();
  }

  render() {
    const {
      scale,
      shadowRadius,
      shadowOffsetWidth: width,
      shadowOffsetHeight: height,
    } = this.state;
    const { onPress } = this.props;

    const childWithProp = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        onPressIn: this.animateTouchIn.bind(this),
        onPressOut: this.animateTouchOut.bind(this),
      })
    );

    return (
      <TouchableWithoutFeedback
        onPressIn={this.animateTouchIn.bind(this)}
        onPressOut={this.animateTouchOut.bind(this)}
        onPress={onPress}
      >
        <Animated.View
          style={[
            styles.cardContainer,
            { transform: [{ scale }] },
            { shadowRadius },
            {
              shadowOffset: {
                width,
                height,
              },
            },
          ]}
        >
          {childWithProp}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
});

export default Card;
