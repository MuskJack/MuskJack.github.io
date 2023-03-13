import { useTranslation } from 'react-i18next';
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: "url(./banner2.gif)",
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

const AboutPage = () => {

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
            {t("About US")}
          </Typography>

            </div>
            </Container>
            </div>

            <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
              textDecoration: "underline"
            }}
          >
            {t("BB Squid LTD.")}
          </Typography>

          <span>
          <Typography
            variant="normal"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            {t("\nWe are incorporated and registered in Hong Kong, focusing on technology advancement and cryptocurrency adoption.\n")}
           
          </Typography>

          </span>

          <br/>

          <span>
          <Typography
            variant="normal"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            {t("Our goal is to expand cryptocurrencies in Hong Kong, so that cryptocurrencies become more and more popular, and create a new trading platform for all Hong Kong citizens.")}
          </Typography>
</span>

          <span>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
              textDecoration: "underline"
            }}
          >
            {t("Why Choose Us")}
          </Typography>
          </span>

          <span>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
              textDecoration: "underline"
            }}
          >
            {t("#Low barriers to entry")}
          </Typography>
          </span>

          <span>
          <Typography
            variant="h14"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            {t("^ We do not have a minimum consumption, if you are new to the cryptocurrency circle, you can also buy a small amount of USDT to try.")}
          </Typography>
          </span>

<br/>
          <span>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
              textDecoration: "underline"
            }}
          >
            {t("#Risk free trade")}
          </Typography>
          </span>

          <span>
          <Typography
            variant="h14"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            {t("^ C2C transactions must go through bank transfers. Because it is difficult to verify whether the funds are safe, they often face the risk of bank account freezing. Therefore, most of us only accept cash transactions, and ensure that your cryptocurrency is safely delivered to your wallet.")}
          </Typography>
          </span>


          <span>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
              textDecoration: "underline"
            }}
          >
            {t("#Open and transparent")}
          </Typography>
          </span>


          <span>
          <Typography
            variant="h14"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "black",
            }}
          >
            {t("^ Each of our transactions needs to be carried out face-to-face at the store and calculated based on the price of the day. Therefore, any transaction is open and transparent. If the customer has any doubts or dissatisfaction with the transaction process, he can check with the staff or backstage staff on the spot.")}
          </Typography>
          </span>

       
            
        </div>

        
    )
};

export default AboutPage;