import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';
import TelegramIcon from '@mui/icons-material/Telegram';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }} >
      {/* <Button variant="outlined" onClick={handleClick}>
        <WhatsAppIcon/>
      </Button> */}
      <Snackbar sx={{ bottom: { xs: 20, sm: 0 },  }} open={open}  onClose={handleClose}>
        <Alert  style={{backgroundColor: 'white',  }} severity="" onClose={handleClose}  sx={{ width: '100%' }}>
          <Link style={{color: 'green', fontSize: '17px' }} href="https://www.jfiu.gov.hk/en/str.html" target={'_blank'}>Whatsapp <WhatsAppIcon/></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link style={{fontSize: '17px' }} href="https://www.jfiu.gov.hk/en/str.html" target={'_blank'}>Telegram <TelegramIcon/></Link>
        
        </Alert>
      </Snackbar>

 
    </Stack>
  );
}