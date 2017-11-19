// @flow
import * as React from 'react';

import type { ReactComponentWithNavigationType } from 'types/navigation.types';

/* eslint-disable react/no-multi-comp */

export const mapNavigationStateParamsToProps = (
  SomeComponent: ReactComponentWithNavigationType
) => {
  class WrappedComponent extends React.Component<any, any> {
    static navigationOptions: any;
    render() {
      const { navigation: { state: { params } } } = this.props;
      return <SomeComponent {...params} {...this.props} />;
    }
  }

  WrappedComponent.navigationOptions = SomeComponent.navigationOptions;
  return WrappedComponent;
};

export const mapScreenPropsToProps = (
  SomeComponent: ReactComponentWithNavigationType
) => {
  class WrappedComponent extends React.Component<any, any> {
    render() {
      const { screenProps, ...otherProps } = this.props;
      return <SomeComponent {...screenProps} {...otherProps} />;
    }
  }

  WrappedComponent.navigationOptions = SomeComponent.navigationOptions;
  return WrappedComponent;
};

/* eslint-enable react/no-multi-comp */
