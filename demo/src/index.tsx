import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import styled from 'styled-components';
import Examples from './examples';
import Home from './home';
import { navy, storm, mint } from './colors';

const Title = styled.h1`
  font-family: 'open-sans', sans-serif;
  font-size: 46px;
  text-align: center;
  color: ${navy};
  margin-bottom: 10px
`;

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 0px 8px;
  color: ${({ selected }) => selected ? mint : storm};
  text-decoration: none;
`;

const ExternalLink = styled.a`
  margin: 0px 8px;
  color: ${storm};
  text-decoration: none;
`;

const Header = styled.header`
  padding: 20px;
`;

let selected = 0;

const Root: React.StatelessComponent<void> = ({ children }) => (
  <div>
    <Header>
      <Title>React-skeletor</Title>
      <Nav>
        <StyledLink selected={selected === 0} onClick={() => selected = 0} to="/">Home</StyledLink>
        <StyledLink selected={selected === 1} onClick={() => selected = 1} to="/demo">Examples</StyledLink>
        <ExternalLink target="_blank" href="https://github.com/trainline/react-skeletor">Github</ExternalLink>
      </Nav>
    </Header>
    {
      children
    }
  </div>
);

function render() {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home}/>
        <Route path="/demo" component={Examples}/>
      </Route>
    </Router>,
    document.getElementById('root')
  );
}

render();
