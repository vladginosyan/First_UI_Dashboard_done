import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import SideBar_1 from '../../components/Analytics/SideBar1';
import Loader from '../../components/Loader';
import useActions from '../../redux/actions';
import * as AnalyticsActions from '../../redux/actions/analytics';
import { history } from '../../redux/configureStore';
import { RootState } from '../../redux/reducers';
import withTheme from '../../theme';
import getToken from '../../utils/getToken';
import useStyles from './App-styles';

const ErrorPage = lazy(() => import('../../pages/ErrorPage'));
const Workflows = lazy(() => import('../../pages/Workflows'));
const CreateWorkflow = lazy(() => import('../../pages/CreateWorkflow'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const WorkflowDetails = lazy(() => import('../../pages/WorkflowDetails'));
const BrowseTemplate = lazy(() =>
  import('../../views/ChaosWorkflows/BrowseTemplate')
);
const HomePage = lazy(() => import('../../pages/HomePage'));
const Community = lazy(() => import('../../pages/Community'));
const Settings = lazy(() => import('../../pages/Settings'));
const TargetHome = lazy(() => import('../../components/Targets/ConnectHome'));
const ConnectTargets = lazy(() =>
  import('../../components/Targets/ConnectTarget')
);
const SchedulePage = lazy(() => import('../../pages/SchedulePage'));
const AnalyticsPage = lazy(() => import('../../pages/AnalyticsPage'));

interface RoutesProps {
  isOwner: boolean;
  isProjectAvailable: boolean;
}

const Routes: React.FC<RoutesProps> = ({ isOwner, isProjectAvailable }) => {
  const classes = useStyles();
  if (getToken() === '') {
    return (
      <div className={classes.content}>
        <Switch>
        <Route exact path='/analitycs/PrometheusDashboard' component={SideBar_1} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </div>
    );
  }

  if (!isProjectAvailable) {
    return (
      <div className={classes.content}>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          {/* <Route path="/" render={() => <Redirect to="/" />} /> */}
        </Switch>
      </div>
    );
  }

  return (
    <div className={classes.content}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/workflows" component={Workflows} />
        <Route exact path="/create-workflow" component={CreateWorkflow} />

        {/* Redirects */}
        <Redirect exact path="/login" to="/" />
        <Redirect exact path="/workflows/details" to="/workflows" />
        <Redirect exact path="/workflows/schedule" to="/workflows" />
        <Redirect exact path="/workflows/template" to="/workflows" />
        <Redirect exact path="/workflows/analytics" to="/workflows" />
        <Route
          exact
          path="/workflows/details/:workflowRunId"
          component={WorkflowDetails}
        />
        <Route
          exact
          path="/workflows/schedule/:scheduleId"
          component={SchedulePage}
        />
        <Route
          exact
          path="/workflows/template/:templateName"
          component={BrowseTemplate}
        />
        <Route
          exact
          path="/workflows/analytics/:workflowRunId"
          component={AnalyticsPage}
        />
        <Route exact path="/community" component={Community} />
        <Route exact path="/targets" component={TargetHome} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/target-connect" component={ConnectTargets} />
        {isOwner ? (
          <Route exact path="/settings" component={Settings} />
        ) : (
          <Redirect to="/" />
        )}
        <Route exact path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

function App() {
  const classes = useStyles();
  const analyticsAction = useActions(AnalyticsActions);
  const userData = useSelector((state: RootState) => state.userData);
  const token = getToken();
  useEffect(() => {
    if (token !== '') analyticsAction.loadCommunityAnalytics();
  }, [token]);

  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            {/* <Routes /> */}
            <Routes
              isOwner={userData.userRole === 'Owner'}
              isProjectAvailable={!!userData.selectedProjectID}
            />
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default withTheme(App);