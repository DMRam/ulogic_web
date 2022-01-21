import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/headerComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './content/landingComponent';
import RepoPage from './content/extraPageComponent';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
      <BrowserRouter>
          {/* <Routes> */}
            <Route path="/" component={LandingPage}/>
            <Route path="/repos" component={RepoPage}/>
          {/* </Routes> */}
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
