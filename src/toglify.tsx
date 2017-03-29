import * as React from 'react';

import { AnyComponent } from './utils';

export interface ToglifyProps {
  text: string;
  style: React.CSSProperties;
}

const animation = `
  @keyframes toglifyAnimation {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export const toglify = <TProps extends ToglifyProps>(
  WrappedComponent: AnyComponent<TProps, any>,
  color: string = '#bdc3c7'
) => {

  const ExportedComponent: React.StatelessComponent<TProps> = (props, context) => {
    if (context.isPending) {
      return (
        <div
          style={{
            ...props.style,
            backgroundColor: color,
            color,
            animation: 'toglifyAnimation 1s alternate infinite'
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: animation }}/>
          {
            props.text
          }
        </div>
      );
    }

    return ( <WrappedComponent {...props} /> );
  };

  ExportedComponent.contextTypes = {
    isPending: React.PropTypes.bool,
  };

  return ExportedComponent;
};
