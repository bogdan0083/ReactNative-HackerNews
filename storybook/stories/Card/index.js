import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

import Card from 'common/components/card';

export default storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('card', () => (
    <Card>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text>Lorem ipsum dolor</Text>
    </Card>
  ));
