import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/headerComponent';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/landingComponent';
import RepoPage from './content/extraPageComponent';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
