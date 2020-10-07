import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import { history } from '../../../redux/configureStore';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactComponent as HomeIcon } from '../../../svg/home.svg';
import { ReactComponent as SettingsIcon } from '../../../svg/settings.svg';
import { ReactComponent as WorkflowsIcon } from '../../../svg/workflows.svg';
import MyHubsIcone from '../assets/MyHub.png'
import AgentsIcone from '../assets/Agents.png'
import SettingsIcone from '../assets/Settings.png'
import Logo from '../assets/Logo.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AnalyticsIcone from '../assets/Analitycs.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import RouteMain from './main/mainRoute'
import Notification_AppBar from './AppBarr_Notification';
import './AppBarr_Notification/style.css'

const SideBar_Analytics: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.logoContener}>
        <img src={Logo} />
      </div>
      <div className={classes.toolbar} />
      <List>
        {['Home', 'Workflows'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <WorkflowsIcon />}</ListItemIcon>
            <ListItemText color='##B9B9B9' primary={text} />
          </ListItem>
        ))}
        {['My Hubs', 'Agents'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <img src={MyHubsIcone} /> : <img src={AgentsIcone} />}</ListItemIcon>
            <ListItemText color='##B9B9B9' primary={text} />
          </ListItem>
        ))}
        {['Analytics', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <img src={AnalyticsIcone} /> : <SettingsIcon style={{ color: '#B9B9B9' }} />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Support'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <HelpOutlineIcon style={{ color: '#B9B9B9' }} /> : null}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap className={classes.appBarrText}>
            Analytics / Kubernetes dashboards / Select a data source {history.location.pathname === '/analitycs/PrometheusDashboard' ? '/  Prometheus dashboard' : null}
          </Typography>
          <Notification_AppBar />
        </Toolbar>cl
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {RouteMain()}
      </main>
    </div>
  );
}

export default SideBar_Analytics;