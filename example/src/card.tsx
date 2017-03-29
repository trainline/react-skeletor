import * as React from 'react';
import { dummify, toglify } from 'react-pendifier';
import { UserCard } from './index';

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

interface TextTitle {
  text: string;
  style: React.CSSProperties;
}

const FirstName = ({ text, style }: TextTitle) => (
  <h1 style={style}>{text}</h1>
);

const LastName = ({ text, style }: TextTitle) => (
  <h3 style={style}>{text}</h3>
);

const Description = ({ text, style }: TextTitle) => (
  <div style={style}>{text}</div>
);

const SkeletonFirstName = toglify(FirstName);
const SkeletonLastName = toglify(LastName);
const SkeletonDescription = toglify(Description);

export const Card: React.StatelessComponent<Props> = ({ data }) => (
  <div style={styles.container}>
    <img src="http://placehold.it/150x150"/>
    <div style={styles.content}>
      <SkeletonFirstName text={data.firstName} style={styles.h1}/>
      <SkeletonLastName text={data.lastName} style={styles.h3}/>
      <SkeletonDescription text={data.description} style={styles.description}/>
    </div>
  </div>
);

export default dummify(
  dummyData,
  ({ data }: Props) => data === undefined
)(Card);
