import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

// component
import Text from './Text';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 100,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomAction: {
    justifyContent: 'center',
    marginTop: 10
  }
}));

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function ItemList({ itemsData, addCart, cart, deleteCart }) {
  const classes = useStyles();
  const removeCart = (item) => {
    if (item.qty !== 0) {
      deleteCart(item, cart, itemsData);
      if (item.qty === 0) {
        Toast.fire({
          icon: 'error',
          title: `${item.title} removed from cart`
        })
      }
    }
  }
  const addToCart = (item) => {
    addCart(item, cart, itemsData)
    Toast.fire({
      icon: 'success',
      title: `${item.title} added to cart`
    });
  }
  return (
    <React.Fragment>
      {
        itemsData.map(value => {
          return <Grid key={value.id} item xs={4}>
            <Paper className={classes.paper}>
              <div style={{ flex: 5 }}>
                <Text data={value.title} />
              </div>
              <Grid container className={classes.bottomAction}>
                <Grid item >
                  <Button onClick={() => { removeCart(value) }} variant='contained' color='secondary' ><Text data='-' /></Button>
                </Grid>
                <Grid item >
                  <Button><Text data={value.qty} /></Button>
                </Grid>
                <Grid item >
                  <Button onClick={() => { addToCart(value) }} variant='contained' color='primary' ><Text data='+' /></Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        })
      }
    </React.Fragment>
  );
};

export default ItemList;
