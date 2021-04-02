import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from './app/hooks';
import CustomNavbar from './components/CustomNavbar';
import { Footer } from './components/Footer';
import HistoryList from './components/History';
import { Loading } from './components/Loading';
import { UserData } from './components/UserData';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const { user, loading } = useAppSelector(state => state.search)

  return (
    <Router>
      <StyledDiv>
        <CustomNavbar />
        <Switch>
          <Route exact path="/">
            {loading ? <Loading /> : user ? <UserData user={user} /> : null}
          </Route>
          <Route path="/history">
            <HistoryList />
          </Route>
        </Switch>
        <Footer />
      </StyledDiv>
    </Router>
  );
}

export default App;
