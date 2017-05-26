import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import styled from 'styled-components';
import Examples from './examples';
import Home from './home';

const Title = styled.h1`
  font-family: open-sans, sans-serif;
  font-size: 24px;
  text-align: center;
`;

const Nav = styled.nav`
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 0px 4px;
`;

const Root: React.StatelessComponent<void> = ({ children }) => (
  <div>
    <Title>React-skeletor</Title>
    <Nav>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/demo">Examples</StyledLink>
    </Nav>
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
