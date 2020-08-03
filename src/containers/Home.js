import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// redux
import { FetchItems } from '../redux/actions/items.action';
import { AddCart, DeleteCart } from '../redux/actions/cart.action';

// component
import ItemList from '../components/ItemList';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  bottomWrapper: {
    width: '100%',
    height: 70,
    position: 'fixed',
    zIndex: 10,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    zIndex: 30,
    opacity: 0.75
  },
  buttonCheckout: {
    zIndex: 40,
    backgroundColor: 'white',
    height: 30
  },
  listContainer: {
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 40
  }

}));

function Home({ getItems, items, addCart, cart, deleteCart, history }) {
  const classes = useStyles();

  useEffect(() => {
    getItemsFirstime()
  }, []);

  const getItemsFirstime = () => {
    if (items.data.length === 0) {
      getItems();
    }
  }
  return (
    <div className={classes.root}>
      {
        cart.count !== 0
          ? <div className={classes.bottomWrapper}>
            <div className={classes.shadow}></div>
            <Button
              variant='contained'
              className={classes.buttonCheckout}
              onClick={() => { history.push('/checkout') }}>
              Checkout
            </Button>
          </div>
          : null
      }


      <Grid
        container
        className={classes.listContainer}
        item
        xs={12}
        spacing={2}>
        {
          items.loading
            ? 'loading'
            : <ItemList
              addCart={addCart}
              deleteCart={deleteCart}
              cart={cart.data}
              itemsData={items.data} />
        }
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(FetchItems()),
    addCart: (item, cart, currentItem) => dispatch(AddCart(item, cart, currentItem)),
    deleteCart: (item, cart, currentItem) => dispatch(DeleteCart(item, cart, currentItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
