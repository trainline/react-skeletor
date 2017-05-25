import * as React from 'react';
import CardInlineStyles from './CardInlineStyles';
import { UserCard } from '../../index';
import { LiveProvider, LiveEditor } from 'react-live';
import styled from 'styled-components';
import cardInlineCode from './cardInline.code';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

interface Props {
  card: UserCard;
}

export default class CardInlineStylesPlayground extends React.Component<Props, void> {
  render() {
    return (
      <Container>
        <LiveProvider code={cardInlineCode}>
          <LiveEditor contentEditable={false}/>
        </LiveProvider>
        <CardInlineStyles card={this.props.card}/>
      </Container>
    );
  }
}
