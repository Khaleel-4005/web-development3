import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cmsLogo from '../../modules/assets/images/favicon.jpg'
//import user from '../../assets/images/user.png';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwitchPopUp from './SwitchPopUp';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import environment from '../../environments/environment';
import * as ActionType from '../../redux/actiontypes/ActionType';
import hospitalImage from '../../modules/assets/images/hospital.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'react-loading-ui';
import logo from '../assets/images/favicon.jpg';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select } from '@mui/material';
import "../cms/CSS/divider.css"
import "../cms/CSS/image.css"


const drawerWidth = 240;
const navItems = ['Cemeteries', 'Customers', 'Contracts', 'Documents', 'Work Orders', 'Scheduling', 'Reports'];
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  
  

  const User = useSelector(state => state.lognReducer);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEAdmit, setAnchorEAdmit] = React.useState(null);

  const [anchorCM, setAnchorCM] = React.useState(null);
  const [anchorCT, setAnchorCT] = React.useState(null);
  const [anchorU, setAnchorU] = React.useState(null);
  const [anchorB, setAnchorB] = React.useState(null);
  const [anchorP, setAnchorP] = React.useState(null);

  const open1 = Boolean(anchorEl);
  const openAdmit = Boolean(anchorEAdmit);

  const openCT = Boolean(anchorCT);
  const openCM = Boolean(anchorCM);
  const openU = Boolean(anchorU);
  const openB = Boolean(anchorB);
  const openP = Boolean(anchorP);

  const [imagePath, setImagePath] = useState('');
  const [openPopUp, setOpenPopUP] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("admit");
  const [cemetryName, setCemetryName]= useState([]);
  const [ cemetryDetails,setCemetryDetails] =useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCMClick = (event) => {
    setAnchorCM(event.currentTarget);
  };

  const handleCTClick = (event) => {
    setAnchorCT(event.currentTarget);
  };

  const handleUClick = (event) => {
    setAnchorU(event.currentTarget);
  };
  const handleBClick = (event) => {
    setAnchorB(event.currentTarget);
  };

  const handlePClick = (event) => {
    setAnchorP(event.currentTarget);
  };

  const handleCMClose = () => {
    setAnchorCM(null);
  };

  const handleCTClose = () => {
    setAnchorCT(null);
    //navigate('/clinicalTeam');
  };
  const handleNavigation = (url) => {
    setAnchorCT(null);
    setActiveButton("clincal");
    navigate(url, { state: { type: 'clinicalTeam' } });
  }

  const handleNavigationBO = (url) => {
    setAnchorB(null);
    navigate(url);
    setActiveButton("bo", { state: { type: 'businessOffice' } });
  }
  const handleNavigationP = (url) => {
    setAnchorP(null);
    navigate(url);
    setActiveButton("patient");
  }
  const handleNavigationUser = (url) => {
    setAnchorU(null);
    navigate(url);
    setActiveButton("user");
  }

  const handleNavigationCMURC = (url, typeOfUrl) => {
    setAnchorCM(null);
    navigate(url, { state: { type: typeOfUrl, cmurcSearchFlag: true } });
    setActiveButton("cmurc");
  }
  const handleNavigationAdmit = (url) => {
    setAnchorCM(null);
    navigate(url, { state: { searchFlag: true } });
    setActiveButton("admit");
  }
  const handleUClose = () => {
    setAnchorU(null);
  };

  const handleBClose = () => {
    setAnchorB(null);
  };

  const handlePClose = () => {
    setAnchorP(null);
  };

  const handleAdmitClick = (event) => {
    //setOpenPopUP(false);
    //setMobileOpen(false);
    setAnchorEAdmit(event.currentTarget);
    setActiveButton("admit");
  };

  const handleDrawerToggle = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };
  

  


  const handlePopUpOpen = () => {
    setOpenPopUP(true);
    setDialogData({
      dialogTitle: 'Switch Facility',
      dialogContent: 'Dialog Content',
    });
  };

  const handlePopUpClose = () => {
    setOpenPopUP(false);
  };

  useEffect(() => {
 
    (async () => {
      setImagePath("../../modules/assets/images/rcbo-logo");
      // if (User.imagePath) {
      //   const picture = await import(`../../modules/assets/images/${User.imagePath}`);
      //   setImagePath(picture.default.toString());
      // } else {
      //   setImagePath(hospitalImage.toString());
      // }
    })();
  }, [User.cemetryName, User.imagePath]);
console.log(User.id)
console.log(User.emailId)

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: "120px" }}>
      <Box
        component="img"
        sx={{
          width: "64px",
          height: "54px",
          left: "30px",
          right: "12.53px",
          top: "10%",
          background: "#FFFFFF",
          bottom: "5%",
          margin: "10px"
        }}
        // className='cmsLogo'
        alt="Your logo."
        src={cmsLogo}
      />
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function onClickLogo(event) {
    event.preventDefault();
  }

  function onLogout(event) {
    event.preventDefault();
    setActiveButton("admit");
    dispatch({ type: ActionType.LOGOUT, payload: undefined });
    if (User.isLogin) {
      let checkEmaiId = User.emailId.split("@");
      if (checkEmaiId[1] !== User.tenantId) {
        navigate('/');
      } else {
        window.location.href = `https://login.microsoftonline.com/${User.tenantId}/oauth2/logout?post_logout_redirect_uri=${environment.ApplicationURI}`;
      }
    }
  }
  function onTransactionLog(event) {
    event.preventDefault();
    navigate('/tbd2');
  }
  function onPatientLoad(event) {
    event.preventDefault();
    Loading();
    axios.get(environment.loadPatientData).then(response => {
      toast.success(response.data.apiResponseVO.message, { position: toast.POSITION.TOP_CENTER });
      navigate('/admittingERSearch', { state: { searchFlag: true } });
    }).catch((error) => {
      toast.error(error, { position: toast.POSITION.TOP_CENTER });
    }).finally(() => {
      setTimeout(() => {
        Loading();
      });
    })
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAdmitClose = () => {
    setAnchorEAdmit(null);

    // navigate('/admittingERSearch', { state: { searchFlag: true } });
  };

  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar sx={{
            // position: "absolute",
            height: "35px",
            left: "0px",
            top: "0px",
            background: (User.id === 47 && User.id ===52 && User.id === 22) ? "#ffb74d": "#647ACB"
          }} >
            <Toolbar
              sx={{
                pr: '20px',
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{
                  position: "absolute",
                  height: "30px",
                  left: "4px",
                  // pl:3,
                  top: "3px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: '150%',
                  color: '#F5F7FA',
                   marginLeft:"25px"
                }} onClick={(event) => onClickLogo(event)}
              >

              </Typography>
              <Typography
                component="h1"
                variant="h6"
                noWrap
                sx={{
                  position: "absolute",
                  height: "30px",
                  left: "225px",
                  top: "11px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: '150%',
                  color: '#F5F7FA'
                }}
              >
              </Typography>

              {User.isLogin && <Box sx={{
                position: "absolute",
                right: "2%",
                fontSize: 35,
              }}>
                <Tooltip title="">
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open1 ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? 'true' : undefined}
                  >
                    <SettingsIcon sx={{
                      position: "absolute",
                      // right: "6%",
                      marginRight:"1px",
                      // pr:3,
                      fontSize: 26,
                      color: "#fff",
                      // top:"1px",
                      bottom: "12px"
                    }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>}
              
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                  marginTop: "5px"

                }}
              >
               
                <Box>
                  
                {(User.id ===47 && User.id === 52) || (User.id === 43) && <MenuItem onClick={handlePopUpOpen} >Switch to cemetery</MenuItem>}
               
                {(User.id ===47 && User.id === 52) || (User.id === 43  || User.id === 44 || User.id === 49)&& <MenuItem onClick={() => handleNavigationUser('/users')}>Users</MenuItem>}
                
                {(User.id ===47 && User.id === 52) || (User.id === 43  || User.id === 44 || User.id === 49)&& <MenuItem onClick={(event) => { onTransactionLog(event) }}>Transaction Log
                </MenuItem>}
                </Box> 
                {(User.id === 22 )  && 
                <MenuItem onClick={handlePopUpOpen} >Switch to cemetery</MenuItem>
                }
                <MenuItem onClick={(event) => { onLogout(event) }}>

                  Logout
                </MenuItem>
              </Menu>

            </Toolbar>
          </AppBar>
        </Box>
    //after login
        {User.isLogin && <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar sx={{
            // position: "absolute",
            height: "35px",
            left: "0px",
            top: "0px",
            background: (User.id === 47 || User.id ===52 || User.id === 22) ? "#ffb74d": "#647ACB"
          }} >
            <Toolbar
              sx={{
                pr: '20px',
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{
                  position: "absolute",
                  height: "30px",
                  left: "4px",
                  // pl:3,
                  top: "3px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: '150%',
                  color: '#F5F7FA',
                   marginLeft:"25px"
                }} onClick={(event) => onClickLogo(event)}
              ><b>Cemetery Management Systems</b>

              </Typography>
              <Typography
                component="h1"
                variant="h6"
                noWrap
                sx={{
                  position: "absolute",
                  height: "30px",
                  left: "225px",
                  top: "11px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: '150%',
                  color: '#F5F7FA'
                }}
              >
              </Typography>

              {User.isLogin && <Box sx={{
                position: "absolute",
                right: "2%",
                fontSize: 35,
              }}>
                <Tooltip title="">
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open1 ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? 'true' : undefined}
                  >
                    <SettingsIcon sx={{
                      position: "absolute",
                      // right: "6%",
                      marginRight:"1px",
                      // pr:3,
                      fontSize: 26,
                      color: "#fff",
                      // top:"1px",
                      bottom: "12px"
                    }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>}
              
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                  marginTop: "5px"

                }}
              >
               
                <Box>
                  
                {(User.id ===47 && User.id === 52) || (User.id === 43) && <MenuItem onClick={handlePopUpOpen} >Switch to cemetery</MenuItem>}
               
                {(User.id ===47 && User.id === 52) || (User.id === 43  || User.id === 44 || User.id === 49)&& <MenuItem onClick={() => handleNavigationUser('/users')}>Users</MenuItem>}
                
                {(User.id ===47 && User.id === 52) || (User.id === 43  || User.id === 44 || User.id === 49)&& <MenuItem onClick={(event) => { onTransactionLog(event) }}>Transaction Log
                </MenuItem>}
                </Box> 
                {(User.id === 22 )  && 
                <MenuItem onClick={handlePopUpOpen} >Switch to cemetery</MenuItem>
                }
                <MenuItem onClick={(event) => { onLogout(event) }}>

                  Logout
                </MenuItem>
              </Menu>

            </Toolbar>
          </AppBar>
        </Box>
          <CssBaseline />
          <AppBar sx={{
            position: "fixed",
            left: "0px",
            top: "35px",
             background: (User.id === 47 || User.id ===52 || User.id === 22) ? "#ffe0b2": "#BED0F7"
          }}>
            <Toolbar
              sx={{
                pr: '20px',
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Grid container xs={12} columnGap={2} rowGap={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Grid item >
                  {/* <Avatar sx={{
                      position: "absolute",
                      width: "64px",
                      height: "54px",
                      left: "30.54px",
                      right: "12.53px",
                      top: "10%",
                      background: "#504938",
                      bottom: "5%"
                    }}>{User.cemetryName.charAt(0).toUpperCase()}</Avatar>  */}
                  <Avatar sx={{
                    position: "absolute",
                    width: "55px",
                    height: "64px",
                    left: "26px",
                    right: "12.53px",
                    top: "3%",
                    // bottom: "5%",

                  }} variant="square" src={logo}></Avatar>
                </Grid>

                <Grid item>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{
                      position: "absolute",
                      height: "30px",
                      left: "90px",
                      top: "18%",
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "150%",
                      color: "#504938",
                     
                    }}
                  >
                    {User.userName}
                    {/* Jhon Doe */}
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h6"
                    wrap
                    sx={{
                      position: "absolute",
                      
                      height: "24px",
                      left: "90px",
                      top: "36px",
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "150%",
                      color: "#504938",
                    }}
                  >
                    {User.role} | {User.cemetryName}
                    {/* Cemetery Admin | Holy Sepulcher Cemetery */}
                  </Typography>

                </Grid>
                <Grid container item columnGap={2} rowGap={2} xs={12} >

                  <Grid item sx={{ marginLeft: "auto", marginRight:"-22px", mt: 3.6, display: { sm: 'none', lg: 'flex' } }}>
                  

                   {(User.id ===47 && User.id === 52) || (User.id === 43 || User.id ===44 || User.id === 49) &&
                  <Box>
                    <Tooltip title="">
                      <Button
                        onClick={handleCMClick}
                        aria-controls={openCM ? 'account-menu-cm' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCM ? 'true' : undefined}
                        // sx={{
                        //   backgroundColor: (activeButton === "clincal" || User.role === "Clinical Team") ? "#647ACB" : "#BED0F7",
                        //    color: (activeButton === "clincal" || User.role === "Clinical Team") ? "#FFFFFF" : "black",
                        //   textTransform: "none"
                        // }}
                        sx={{ color: 'black', textTransform: "none", fontSize: 16 }}
                      >
                        Cemetery
                      </Button>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorCM}
                      id="account-menu-cm"
                      open={openCM}
                      onClose={handleCMClose}
                      onClick={handleCMClose}
                    >
                      <MenuItem onClick={() => handleNavigation('/cemeteries')}> Spaces </MenuItem>
                      <MenuItem >Menu 2 (Burial)</MenuItem>
                      <MenuItem>Menu 3 (Ownership)</MenuItem>
                      <MenuItem>Menu 4 (Marker)</MenuItem>
                      <MenuItem>Menu 5 (Deed)</MenuItem>
                      <MenuItem>Menu 6 (Vault)</MenuItem>
                      <MenuItem>Menu 7 (Permissions)</MenuItem>
                    </Menu>
                    
                    <Typography variant='p' sx={{color: "rgb(127, 125, 125)"}} >|</Typography>
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}
                    <Button sx={{ color: 'black', textTransform: "none", fontSize: 16 }} onClick={() => handleNavigation('/customerListing')} >

                      Customers
                    </Button>
                    
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}
                    
                    
                    {/* <Button sx={{ color: 'black', textTransform: "none" , fontSize: 16}} onClick={() => handleNavigation('/Report')}>Reports</Button> */}
                    <Typography variant='p' sx={{color: "rgb(127, 125, 125)"}} >|</Typography>
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}
                  
                  </Box>

                  } 
                  {/* <Typography variant='p' sx={{color: "rgb(127, 125, 125)"}} >|</Typography> */}
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}
                    <Button sx={{ color: 'black', textTransform: "none" , fontSize: 16 }} onClick={() => handleNavigation('/contract')}>Contracts</Button>
                    <Typography variant='p' sx={{color: "rgb(127, 125, 125)", mt:0.9}} >|</Typography>
                    <Button sx={{ color: 'black', textTransform: "none" , fontSize: 16}} onClick={() => handleNavigation('/Document')}>Documents</Button>
                    <Typography variant='p' sx={{color: "rgb(127, 125, 125)", mt:0.9}} >|</Typography>
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}
                    {/* <Button sx={{ color: 'black', textTransform: "none" , fontSize: 16}} onClick={() => handleNavigation('/tbd')}>Work Orders</Button> */}
                    <Button sx={{ color: 'black', textTransform: "none" , fontSize: 16}} onClick={() => handleNavigation('/scheduling')}>Scheduling</Button>
                    {(User.id === 43  || User.id === 44 || User.id === 49) &&
                    <Box>
                       <Typography variant='p' sx={{color: "rgb(127, 125, 125)", mt:0.9}} >|</Typography>
                      <Tooltip title="">
                      <Button
                        onClick={handleCTClick}
                        aria-controls={openCT ? 'account-menu-ct' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCT ? 'true' : undefined}
                        // sx={{
                        //   backgroundColor: (activeButton === "clincal" || User.role === "Clinical Team") ? "#647ACB" : "#BED0F7",
                        //    color: (activeButton === "clincal" || User.role === "Clinical Team") ? "#FFFFFF" : "black",
                        //   textTransform: "none"
                        // }}
                        sx={{ color: 'black', textTransform: "none", fontSize: 16 }}
                      >
                        Reports
                      </Button>
                    </Tooltip>
                    <Menu
                    anchorEl={anchorCT}
                    id="account-menu-ct"
                    open={openCT}
                    onClose={handleCTClose}
                    onClick={handleCTClose}
                  >
                    <MenuItem onClick={() => handleNavigation('/plotReport')} > Cemetery wise Plots  </MenuItem>
                    <MenuItem  onClick={() => handleNavigation('/availablePlotsInCemeteriesReport')}>Available Plots in Cemeteries</MenuItem>
                    
                    
                  </Menu> </Box> 
                  }
                  
                    {/* <Divider className="dividerColor" orientation="vertical" variant="middle" flexItem /> */}

                    {/* </Typography> */}
                    {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                  </Grid>
                  
                  <Grid item >
                    {/* <Box sx={{
                      position: "absolute",
                      right: '2%',
                      fontSize: 35,
                    }}>
                      <Tooltip title="">
                        <Button
                          onClick={handleBClick}
                          // aria-controls={openB ? 'account-menu-b' : undefined}
                          // aria-haspopup="true"
                          // aria-expanded={openB ? 'true' : undefined}
                          sx={{color:'black'}}
                          // sx={{
                          //   backgroundColor: (activeButton === "bo" || User.role === "Business Office") ? "#787878" : "#c3c7a7",
                          //   color: (activeButton === "bo" || User.role === "Business Office") ? "#FFFFFF" : "black",
                          //   textTransform: "none"
                          // }}
                        >
                          Reports
                        </Button>
                      </Tooltip>
                    </Box> */}
                    {/* <Menu
                      anchorEl={anchorB}
                      id="account-menu-b"
                      open={openB}
                      onClose={handleBClose}
                      onClick={handleBClose} 
                    >
                      <MenuItem onClick={() => handleNavigationBO('/reports')}>Reports</MenuItem>
                    </Menu> */}
                  </Grid>
                </Grid>
                
              </Grid>
            </Toolbar>
          </AppBar>
          <Box component="nav" >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{

                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Toolbar />
        </Box>}
        <SwitchPopUp
          open={openPopUp}
          handleClose={handlePopUpClose}
          dialogTitle={dialogData.dialogTitle}
          dialogContent={dialogData.dialogContent}
        />
      </ThemeProvider >
    </div >
  );
}

export default function Header() {
  return <DashboardContent />;
}