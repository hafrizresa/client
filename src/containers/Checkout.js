import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { ArrowBack } from '@material-ui/icons';

//component
import Table from '../components/Table';

//redux
import { FlushCart } from '../redux/actions/cart.action';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttonSubmit: {
    marginTop: 20
  }
}));

function Checkout({ cart, history, submitCheckout, items }) {
  const classes = useStyles();
  const submitCheckOut = () => {
    if (cart.count === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Select Item first',
      })
    } else {
      submitCheckout(items.data);
      history.push('/')
    }
  }
  return (
    <>
      <Button
        variant="rounded"
        color="default"
        startIcon={<ArrowBack />}
        style={{marginTop:70}}
        onClick={()=>{history.push('/')}}
      >
        back
      </Button>
      <div className={classes.root}>
        <p>Check Out</p>
        <Table data={cart.data} total={cart.count} />
        <Button
        variant='contained'
        color='primary'
        onClick={() => { submitCheckOut() }}
        className={classes.buttonSubmit}>
          Proceed
      </Button>
      </div>
    </>
  )
};

const mapStateToProps = state => ({
  cart: state.cart,
  items: state.items
});

const mapDispatchToProps = dispatch => {
  return {
    submitCheckout: (currentItems) => { dispatch(FlushCart(currentItems)) }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
