import * as React from 'react';

import { AnyComponent } from './utils';

export interface ToglifyProps {
  text: string;
  style: React.CSSProperties;
}

export const animationName = 'toglifyAnimation';
export const animation = `
  @keyframes ${animationName} {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export const defaultColor = '#bdc3c7';

export const defaultStyle: React.CSSProperties = {
  backgroundColor: defaultColor,
  color: defaultColor,
  animation: `${animationName} 1s alternate infinite`
};

export const toglify = <TProps extends ToglifyProps>(style: React.CSSProperties = defaultStyle) => (
  WrappedComponent: AnyComponent<TProps, any>, //tslint:disable-line
) => {
  const ExportedComponent: React.StatelessComponent<TProps> = (props, context) => {
    if (context.isPending) {
      return (
        <div
          style={{
            ...props.style,
            ...style,
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
