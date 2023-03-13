import { useTranslation } from 'react-i18next';
import { Container, makeStyles, Typography } from "@material-ui/core";
import CustomizedTimeline from './Step';
import Stepsell from './Stepsell';

const useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: "url(./cryptobanner1.gif)",
    },
    banner2: {
        backgroundImage: "url(./cryptobanner2.gif)"
    },
    bannerContent: {
      height: 200,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around",
    },
    tagline: {
      display: "flex",
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  }));

const TradingPage = () => {

    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <div >
            <div className={classes.banner}>
            <Container className={classes.bannerContent}>
            <div className={classes.tagline}> 
            
            <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            {t("HOW TO BUY")}
          </Typography>

            </div>
            </Container>
            </div>

           <CustomizedTimeline/>

           <div className={classes.banner2}>
            <Container className={classes.bannerContent}>
            <div className={classes.tagline}> 
            
            <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            {t("HOW TO SELL")}
          </Typography>

            </div>
            </Container>
            </div>

            <Stepsell/>

       
            
        </div>

        
    )
};

export default TradingPage;