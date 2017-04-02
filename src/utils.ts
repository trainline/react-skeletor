export type AnyComponent<TProps, TState> = React.StatelessComponent<TProps>
  | (new() => React.Component<TProps, TState>)
  | (new() => React.PureComponent<TProps, TState>);

export interface Pendable {
  isPending: boolean;
}

export type Styling = React.CSSProperties | string;

export const createSkeletonStyle = (color: string) => ({
  backgroundColor: color,
  color,
});
