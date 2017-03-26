import * as React from 'react';
import { pendify } from 'react-pendifier';

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

interface Props {
  data: {
    firstName: string;
    lastName: string;
    description: string;
  };
  isLoading?: boolean;
}

export const Card: React.StatelessComponent<Props> = ({ data }) => (
  <div style={styles.container}>
    <img src="http://placehold.it/150x150"/>
    <div style={styles.content}>
      <h1 style={styles.h1}>{data.firstName}</h1>
      <h3 style={styles.h3}>{data.lastName}</h3>
      <div style={styles.description}>{data.description}</div>
    </div>
  </div>
);

export default pendify({
  data: {
    firstName: 'TTTTTT',
    lastName: 'TTTTTTTTTTTT',
    description: 'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT' //tslint:disable-line
  },
  isLoading: false
}, ({ isLoading }: Props) => {
  return isLoading === true;
})(Card);
