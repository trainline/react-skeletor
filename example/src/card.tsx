import * as React from 'react';
import { dummify, pendify } from 'react-pendifier';

const styles = {
  container: {
    display: 'flex',
    width: '80%',
    margin: '40px auto',
    border: '1px solid  #ddd'
  },
  content: {
    backgroundColor: '#f0f0f0',
    padding: '10px 16px',
    color: '#34495e',
    fontFamily: 'system-ui, non-serif',
    width: '100%'
  },
  h1: {
    margin: 0
  },
  h3: {
    margin: 0
  },
  description: {
    color: '#95a5a6',
    marginTop: 10,
    wordWrap: 'break-word',
    maxWidth: 400
  }
};

export interface Props {
  firstName: string;
  lastName: string;
  description: string;
  isPending?: boolean;
}

export const Card: React.StatelessComponent<Props> = ({ firstName, lastName, description }) => (
  <div style={styles.container}>
    <img src="http://placehold.it/150x150"/>
    <div style={styles.content}>
      <h1 style={styles.h1}>{firstName}</h1>
      <h3 style={styles.h3}>{lastName}</h3>
      <div style={styles.description}>{description}</div>
    </div>
  </div>
);

export default dummify(
  {
    firstName: 'TTTTTT',
    lastName: 'TTTTTTTTTTTT',
    description: 'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT' //tslint:disable-line,
  },
  ({ isPending }: Props) => {
    return isPending === true;
  }
  )(pendify<Props>(Card));

