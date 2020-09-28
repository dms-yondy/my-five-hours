import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PastCard from './PastCard';
import './PastGrid.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {props.array.map( item => (
        <Grid item container justify="center" xs={3}>
          <PastCard date={item.date} topic={item.topic} learnt={item.learnt} /> 
        </Grid>  
      ))}
    </Grid>
  );
}
