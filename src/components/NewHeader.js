import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from '../components/tokens/logo.png';
import LanguageBtn from "./Languagebtn";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link2 from '@mui/material/Link';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const {t} = useTranslation();

  const drawer = (
   
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        
        <img
          src={logo}
          alt = "123"
          height="60"
          style={{ marginBottom: 5 }}
        />

      <Divider />

      <List>
       <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat", color: "white", fontWeight: 'bold' }}
        >
          <Link style={{ margin: 18, fontWeight: "bold", fontFamily: "Montserrat", color: "white", fontWeight: 'bold', fontSize: '20px' }} to={`/`}>{t("HomePage")}</Link>
        </Typography>
      </List>

      <List>
       <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat", color: "white", fontWeight: 'bold' }}
        >
          <Link style={{ margin: 18, fontWeight: "bold", fontFamily: "Montserrat", color: "white", fontSize: '20px' }} to={`/about`}>{t("About")}</Link>
        </Typography>
      </List>

      <List>
       <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat", color: "white", fontWeight: 'bold' }}
        >
          <Link style={{ margin: 18, fontWeight: "bold", fontFamily: "Montserrat", color: "white", fontSize: '20px' }} to={`/trade`}>{t("Features")}</Link>
        </Typography>
      </List>

      <List>
       <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat", color: "white", fontWeight: 'bold' }}
        >
          <Link style={{ margin: 18, fontWeight: "bold", fontFamily: "Montserrat", color: "white", fontSize: '20px' }} to={`/trade`}>{t("Contact Us")}</Link>
        </Typography>
      </List>

      <List>
       <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat", color: "white", fontWeight: 'bold' }}
        >
          <Link style={{ margin: 18, fontWeight: "bold", fontFamily: "Montserrat", color: "white", fontSize: '20px' }} to={`/faq`}>{t("FAQ")}</Link>
        </Typography>
      </List>

    </Box>
   
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <img
          src={logo}
          alt = "123"
          height="60"
          style={{ marginBottom: 10 }}
        />
        <Typography
            style={{fontSize: '13px', fontWeight: 'bold'}}
            component="div"
            
          >
            BB Squid OTC
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block', } }}  >
           
              <Button  sx={{ color: 'red' }}>
         
                <Link style={{color: 'white', fontWeight: "bold", fontSize: '18px', paddingLeft: 40}} to={`/`}>{t("HomePage")}</Link>
                
              </Button>

              <Button sx={{color: '#fff'}}> <Link style={{color: 'white', fontWeight: "bold", fontSize: '18px', }} to={`/about`}>{t("About")}</Link></Button>

              <Button sx={{color: '#fff'}}> <Link style={{color: 'white', fontWeight: "bold", fontSize: '18px', }} to={`/trade`}>{t("Features")}</Link></Button>

              <Button sx={{color: '#fff'}}> <Link style={{color: 'white', fontWeight: "bold", fontSize: '18px', }} to={`/trade`}>{t("Contact Us")}</Link></Button>

              <Button sx={{color: '#fff'}}> <Link style={{color: 'white', fontWeight: "bold", fontSize: '18px', }} to={`/faq`}>{t("FAQ")}</Link></Button>

              
          
          </Box>
          <Button ><LanguageBtn fontColor='white' /></Button>
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;