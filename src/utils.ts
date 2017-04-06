import * as React from 'react';

export type AnyComponent<TProps, TState> = React.StatelessComponent<TProps>
  | (new() => React.Component<TProps, TState>)
  | (new() => React.PureComponent<TProps, TState>);

export interface Pendable {
  isPending: boolean;
}

export interface Styling  {
  style?: React.CSSProperties;
  className?: string;
};

export interface SkeletorContext {
  isPending: boolean;
  styling: Styling;
}

export interface Context {
  skeletor: SkeletorContext;
}

export const createSkeletonStyle = (color: string) => ({
  backgroundColor: color,
  color,
});

export const contextTypes = {
  skeletor: React.PropTypes.shape({
    isPending: React.PropTypes.bool,
    styling: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
  })
};
