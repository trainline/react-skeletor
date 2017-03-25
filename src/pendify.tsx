import * as React from 'react';

export function pendify<TProps>(Component: React.StatelessComponent<TProps>) {
  const WrappedComponent: React.StatelessComponent<void> = () => <div>Pendify...</div>;
  return WrappedComponent;
}
