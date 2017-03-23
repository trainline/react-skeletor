import * as React from 'react';

export function pendify() {
  const WrappedComponent: React.StatelessComponent<void> = () => <div>pendify</div>;
  return WrappedComponent;
}
