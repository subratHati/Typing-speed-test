import "./Certificate.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

export default function Certificate({triggerReset, correctWords, wordCounter}) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    
    setOpen(false);
    triggerReset();
  };


  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
       
        <DialogTitle id="responsive-dialog-title">
          {"Here is your test results !"}
        </DialogTitle>
        <div className="successBox">
          <div className='successLogo'><FontAwesomeIcon icon={faCheck} className="tickMark"/></div>
          <div className="successMsg">
            Completed!!
          </div>
        </div>
        <DialogContent>
          <DialogContentText>
           WPM:{correctWords}
          </DialogContentText>
          <DialogContentText>
           Accuracy:{~~((100/wordCounter) * correctWords).toFixed(2)}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:"#24A984"}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
