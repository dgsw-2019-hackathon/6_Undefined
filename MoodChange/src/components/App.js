import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginSignUpPage, MyInfoPage, WriteMoodBoardPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Start" component={LoginSignUpPage} />
      <Route path="/MyInfo" component={MyInfoPage} />
      <Route path="/WriteMoodBoard" component={WriteMoodBoardPage} />
    </Switch>
  );
};

export default App;
