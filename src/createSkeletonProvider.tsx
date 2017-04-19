import * as React from 'react';

import { AnyComponent, Styling, contextTypes } from './utils';

export type MapPendingToFull<TPendingProps, TFullProps> = (props: TPendingProps) => TFullProps;

// Can be either an object of data or a function returning an object of data
export type DummyData<TPendingProps, TFullProps> = TFullProps | MapPendingToFull<TPendingProps, TFullProps>; // tslint:disable-line
// define if the data are still loading or not
// type Predicate = <T>(props: T) => boolean;


export interface ExportedComponentProps<TPendingProps, TFullProps> {
  pendingProps: TPendingProps;
  fullProps?: TFullProps;
}

// export function createSkeletonProvider<TPendingProps, TFullProps>(
//   // dummyData: DummyData<Readonly<TPendingProps>, Readonly<TFullProps>>,
//   dummyData: DummyData<TPendingProps, TFullProps>,
//   // mapPendingToFull: (props: Readonly<TPendingProps>) => Readonly<TFullProps>,
//   // predicate: (props: Readonly<TPendingProps>) => boolean,
//   styling?: Styling,
// ) {
//   return function(WrappedComponent: AnyComponent<TFullProps, any>): React.ComponentClass<ExportedComponentProps<TPendingProps, TFullProps>> {

//     class ExportedComponent extends React.Component<ExportedComponentProps<TPendingProps, TFullProps>, void> {

//       static childContextTypes = contextTypes;

//       getChildContext = () => ({
//         skeletor: {
//           isPending: true,
//           styling: styling,
//         },
//       })

//       render() {
//         const { props: { pendingProps, fullProps }} = this;
//         const data = typeof dummyData === 'function' ? dummyData(pendingProps) : dummyData;
//         return this.props.fullProps
//           ? <WrappedComponent {...fullProps} />
//           : <WrappedComponent {...data} />;
//       }

//       // render() {
//       //   const { props } = this;

//       //   if (predicate(props)) {
//       //     // Either call the dummyData as a function or assign dummyData to data
//       //     const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

//       //     return <WrappedComponent {...props} {...data}/>;
//       //   }

//       //   return <WrappedComponent {...mapPendingToFull(props)} />;
//       // };
//     }


//     return ExportedComponent;
//   };
// }



export function createSkeletonProvider<PredicateProps, TProps extends Object>(
  dummyData: DummyData<Readonly<Partial<TProps> & PredicateProps>>,
  predicate: (props: Readonly<PredicateProps>) => boolean,
  styling?: Styling,
) {
  return function(WrappedComponent: AnyComponent<TProps, any>): React.ComponentClass<Partial<TProps> & PredicateProps> {


    class ExportedComponent extends React.Component<Partial<TProps> & PredicateProps, void> {

      static childContextTypes = contextTypes;

      getChildContext = () => ({
        skeletor: {
          isPending: predicate(this.props),
          styling: styling,
        },
      })

      render() {
        const { props } = this;

        // Append dummy data only if the condition defined by the predicate are met, by default if there is no predicate,
        // append the data.
        if (predicate ? predicate(props) : true) {
          // Either call the dummyData as a function or assign dummyData to data
          const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

          return <WrappedComponent {...props} {...data}/>;
        }

        return <WrappedComponent {...props} />;
      };
    }


    return ExportedComponent;
  };
}


/*export const createSkeletonProvider = <TProps extends Object>(
  dummyData: DummyData<TProps>,
  predicate: (props: TProps) => boolean,
  styling?: Styling,
) => (
  WrappedComponent: AnyComponent<TProps, any> // tslint:disable-line
): React.ComponentClass<Partial<TProps>> => (
  class ExportedComponent extends React.Component<TProps, void> {

    static childContextTypes = contextTypes;

    getChildContext = () => ({
      skeletor: {
        isPending: predicate(this.props),
        styling: styling,
      },
    })

    render() {
      const { props } = this;

      // Append dummy data only if the condition defined by the predicate are met, by default if there is no predicate,
      // append the data.
      if (predicate ? predicate(props) : true) {
        // Either call the dummyData as a function or assign dummyData to data
        const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

        return <WrappedComponent {...props} {...data}/>;
      }

      return <WrappedComponent {...props} />;
    };
  }
);*/

/*
export const createSkeletonProvider = <PendingProps, TProps extends Object>(
  dummyData: DummyData<TProps>,
  predicate: (props: TProps) => boolean,
  styling?: Styling,
) => (
  WrappedComponent: AnyComponent<TProps, any> // tslint:disable-line
): React.ComponentClass<TProps> => (
  class ExportedComponent extends React.Component<PendingProps, void> {

    static childContextTypes = contextTypes;

    getChildContext = () => ({
      skeletor: {
        isPending: predicate(this.props),
        styling: styling,
      },
    })

    render() {
      const { props } = this;

      // Append dummy data only if the condition defined by the predicate are met, by default if there is no predicate,
      // append the data.
      if (predicate ? predicate(props) : true) {
        // Either call the dummyData as a function or assign dummyData to data
        const data = typeof dummyData === 'function' ? dummyData(props) : dummyData;

        return <WrappedComponent {...props} {...data}/>;
      }

      return <WrappedComponent {...props} />;
    };
  }
);*/
