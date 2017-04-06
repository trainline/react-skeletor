import * as React from 'react';
import { dummify, toglify } from 'react-pendifier';
import { UserCard } from '../index';

const dummyData = {
  data: {
    firstName: 'TTTTTT',
    lastName: 'TTTTTTTTTTTT',
    description: `
      TTTTTTTTTTTTT TTTTTTT TTTTTT TTTT TT TTTTTTTTT TTTTT TTTTT
      TT TTT T TTTTTTT TTTTT TT TTTTT TTTTT TTTTTTTTT TT TTTT TTTT TTT TTTT TT`
  }
};

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
    marginTop: 6,
    marginBottom: 10,
    lineHeight: '20px'
  },
  h3: {
    margin: 0
  },
  description: {
    color: '#95a5a6',
    marginTop: 10,
    lineHeight: '20px'
  }
};

export interface Props {
  data: UserCard;
}

const SkeletonFirstName = toglify()(
  ({ text, style }) => (<h1 style={style}>{text}</h1>)
);

const SkeletonLastName = toglify()(
  ({ text, style }) => (<h3 style={style}>{text}</h3>)
);

const SkeletonDescription = toglify()(
  (props) => console.log(props) || (<div style={props.style}>{props.text}</div>)
);

export const Card: React.StatelessComponent<Props> = ({ data }) => (
  <div style={styles.container}>
    <img src="http://placehold.it/150x150" />
    <div style={styles.content}>
      <SkeletonFirstName text={data.firstName} style={styles.h1}/>
      <SkeletonLastName text={data.lastName} style={styles.h3}/>
      <SkeletonDescription text={data.description} style={styles.description} />
    </div>
  </div>
);

const pendingColor = '#bdc3c7';

export default dummify(
  dummyData,
  // Declare pending state if data is undefined
  ({ data }: Props) => data === undefined,
  {
    style: {
      backgroundColor: pendingColor,
      color: pendingColor,
      borderColor: pendingColor,
    }
  }
)(Card);
