import { makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: 'linear-gradient(67.59deg, #172D2B -0.71%, #224F4C 98.91%)',
      borderBottom: '1px solid rgba(45, 166, 96, 0.2)',
      boxShadow:'0 0 black !important',
    },
  },
 
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(67.59deg, #172D2B -0.71%, #224F4C 98.91%)',
    borderRight: '1px solid rgba(45, 166, 96, 0.2)',
    color: '#FFFFFF'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: 'linear-gradient(67.59deg, #172D2B -0.71%, #224F4C 98.91%)',
  },
  appBarrText:{
    fontFamily: 'Ubuntu',
   fontStyle: 'normal',
   fontWeight: 'normal',
  fontSize: "12px",
  lineHeight: "165%",
  color: "#B9B9B9"
  },
  SelectADataSource:{
    paddingTop: '20px',
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "130%",
    color: "#FFFFFF",
  },
  logoContener:{
    display: 'flex',
    paddingLeft: '30.71px',
    paddingTop: '20px',
  },
  text_title:{
    paddingTop: '10px',
    paddingBottom: '40px',
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#FFFFFF",
  },

}));

export default useStyles;