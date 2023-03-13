import { useTranslation } from 'react-i18next';
import { Container, makeStyles, Typography } from "@material-ui/core";
import { textAlign } from '@mui/system';
import BasicStack from '../components/faqcontent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {

    Toolbar,

  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: "url(./faqvideo.gif)",
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

const FaqPage = () => {

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
            {t("FAQ")}
          </Typography>
            </div>
            </Container>
            </div>
        <Box   >
        <Card variant="outlined" style={{textAlign: 'center', backgroundColor: '#fafbfc'}} >
        <CardContent style={{backgroundColor: '#fafbfc'}} sx={{ display: 'inline-block', }}  ><BasicStack/></CardContent>
            
        </Card>
    
        </Box>

        </div>

        
    )
};

export default FaqPage;