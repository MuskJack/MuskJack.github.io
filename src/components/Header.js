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
import { Link } from "react-router-dom";
import Linkk from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

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
      main: "#FFF",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  const {t} = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>

          <img
          // src={coin?.image}
          src={logo}
          // alt={coin.name}
          alt = "123"
          height="30"
          style={{ marginBottom: 10 }}
        />
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
           
              BB Squid OTC

            </Typography>

            {/* <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat" }}
          // className={classes.title}
        >
          <Link  to={`/`}>{t("HomePage")}</Link>
        </Typography> */}

        {/* <Typography
          variant="h44"
          style={{ margin: 1, fontFamily: "Montserrat" }}
          // className={classes.title}
        >
          <Link  to={`/about`}>{t("About Us")}</Link>
        </Typography> */}

        {/* <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat" }}
          className={classes.title}
        >
          <Link  to={`/`}>{t("Contact Us")}</Link>
        </Typography> */}

        {/* <Typography
          variant="h44"
          style={{ margin: 18, fontFamily: "Montserrat"}}
          className={classes.title}
        >
          <Link  to={`/`}>{t("FAQ")}</Link>
        </Typography> */}

        {/* <Typography
          variant="h44"
          style={{ margin: 10, fontFamily: "Montserrat" }}
          className={classes.title}
        >
          <Linkk style={{color: "orange"}} href={"https://mui.com/material-ui/material-icons/?query=whats&selected=WhatsApp"} target="_blank"><WhatsAppIcon/></Linkk>
        </Typography>

        <Typography
          variant="h44"
          style={{ margin: 10, fontFamily: "Montserrat", textAlign: "center" }}
          className={classes.title}
        >
          <Linkk style={{color: "orange"}} href={"https://mui.com/material-ui/material-icons/?query=whats&selected=WhatsApp"} target="_blank"><TelegramIcon/></Linkk>
        </Typography> */}

<Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginRight: 15}}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem ><Link  to={`/`}>{t("HomePage")}</Link></MenuItem>
              <MenuItem ><Link  to={`/about`}>{t("About Us")}</Link></MenuItem>
              
            </Select>

       

           


            <LanguageBtn fontColor='white' style={{ width: 100, height: 40, marginLeft: 15 }}/>
            {/* <Button color="inherit">Login</Button> */}
            
          </Toolbar>

        </Container>

        
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
