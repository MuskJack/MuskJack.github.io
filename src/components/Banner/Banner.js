import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
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

function Banner() {
  const classes = useStyles();

  const {t} = useTranslation();

  return (
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

            {t("BB Squid OTC")}
          </Typography>
          <Typography
            variant="h4"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            {t("Safe ‧ Fast ‧ Expert")}
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
