// @flow
import * as React from 'react';

export type NavigationType = any;
export type ReactComponentWithNavigationType = React.ComponentType<any> & {
  navigationOptions: any,
};
