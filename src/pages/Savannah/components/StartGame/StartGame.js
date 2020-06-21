import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Background from "../background/Background";
import {CloseButton} from "../closeButton";
import SavannahButton from "../SavannahButton/SavannahButton";

const useStyles = makeStyles(theme=> ({
  root:{
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolBar:{
    position: "relative",
    textAlign: "center",
    color: "#662246"
  },
  contentDialog: {
    zIndex: 10,
    padding: theme.spacing(3, 2),
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentText:{
    color: 'wheat',
    marginBottom: "1rem"
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(106, 35, 72, .3)',
    color: 'wheat',
    height: 48,
    padding: '0 30px',
  },
}));

function StartGame() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false)
  };
  return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Background />
        <Toolbar className={classes.toolBar}>
            <Typography variant={'h4'} className={classes.title}>
              Savannah Game
            </Typography>
            <CloseButton />
        </Toolbar>
        <div className={classes.contentDialog}>
          <Typography variant={'h6'} className={classes.contentText}>
            Game must begin...
          </Typography>
          <SavannahButton title={'lets begin'} onClick={handleClose}/>
        </div>
      </Dialog>

  )
}

export { StartGame }