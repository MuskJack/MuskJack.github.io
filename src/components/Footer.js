import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { useHistory } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  import LanguageBtn from "./Languagebtn";
  import logo from "../components/tokens/logo.png";
import { border, borderBottom } from "@mui/system";
import { useTranslation } from 'react-i18next';
import BasicStack from "./faqcontent";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '../components/Alert';
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#070708",
      },
      type: "dark",
    },
  });
  
  function Footer() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
  
    const history = useHistory();
    const {t} = useTranslation();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static" style={{backgroundColor: '#1e1f21'}}>
          <Container>
            <Toolbar>
              <Alert/>

              <Typography
                onClick={() => history.push(`/`)}
                variant="h14"
                className={classes.title}
              >
             
             BB Squid OTC © Copyright
               
              </Typography>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              {/* <Button color="inherit">Login</Button> */}
              {/* <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"HKD"}>HKD</MenuItem>
                
              </Select> */}
              <Button sx={{color: '#fff'}}> <Link style={{color: 'orange', fontWeight: "bold", fontSize: '10px', }} to={`/aml`}>{t("KYC/AML/CFT")}</Link></Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button sx={{color: '#fff'}}> <Link style={{color: 'orange', fontWeight: "bold", fontSize: '10px', }} to={`/tradingrules`}>{t("TERMS & CONDITIONS OF TRADE")}</Link></Button>

            </Toolbar>

            <span>
                <Typography
                    variant="22"
                    style={{paddingTop: "10px"}}>
                {t("Disclaimer: The content of this website is not investment advice and does not constitute any investment product recommendation. The content is for general use only and does not take into account your personal needs, investment objectives and specific financial situation. Investment carries risks. Before making any investment decisions, you should consider your financial situation, investment objectives and experience, risk tolerance and ability to understand the nature and risks of the relevant products; if necessary, you can also seek independent professional advice. However, all investment decisions depend on your personal judgment. Past return is no indication of future performance. The price of securities / investment products / rate of exchange may go up as well as down, and may sometimes fluctuate dramatically. The possibility of incurring investment losses is as likely as that of making profit.")}
                </Typography>
              </span>

             

          </Container>
        </AppBar>

        
      </ThemeProvider>
    );
  }
  
  export default Footer;