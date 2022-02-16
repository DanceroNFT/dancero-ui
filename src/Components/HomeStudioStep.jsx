import { Typography } from "@mui/material";
//import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import studio from '../images/studio.jpg';
import home from '../images/home.jpg';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../scss/cards.scss"
import "../scss/layout.scss"

function HomeStudioStep({ update, goBackPage }) {
  return (
    <div className="container">
      <div className="section-title">
        <h2>
          Welcome to Dancero wizard, please select one of the following
          options :
        </h2>
      </div>
      <div className="cards_container">
            <div className="card"
              sx={{ maxWidth: 300 }}
              onClick={() => update("place", "home")}
            >
              <div className="card_image">
                <img src={home}/>
              </div>
              <div className="card_name">
                  Home
              </div>
            </div>
          
            <div className="card"
              sx={{ maxWidth: 300 }}
              onClick={() => update("place", "studio")}
            >
              <div className="card_image">
                <img src={studio}/>
              </div>
              <div className="card_name">
                  studio
              </div>
            </div>
            <Grid xs={12} item container justifyContent="center" >
              <Fab variant="extended" size="medium" color="primary" onClick={()=> goBackPage()} >
                <ArrowBackIcon/>
              </Fab>
            </Grid>
        </div>
      </div>
  );
}

export default HomeStudioStep;
