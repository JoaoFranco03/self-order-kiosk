import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,
  Button,
  TextField,
  Fade,
  Grow,
  Slide,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext, useEffect, useState } from "react";
import {
  addToOrder,
  listCategories,
  listProducts,
  clearOrder,
  removeFromOrder,
} from "../actions";
import { Store } from "../Store";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
import { DialogTitle } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderScreen(props) {
  const styles = useStyles();
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
    
  const closeHandler = () => {
    setIsOpen(false);
  };

  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
    setQuantity(1);
  };

  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
    setQuantity(1);
  };

  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;

  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { orderItems, itemsCount, totalPrice, taxPrice, orderType } =
    state.order;

  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  const previewOrderHandler = (name) => {
    props.history.push(`/review`);
  };

  useEffect(() => {
    listCategories(dispatch);
  }, [dispatch]);

  return (
    <Fade in={true}>
      <Box className={styles.root}>
        <Box className={styles.main}>
          <Dialog
            onClose={closeHandler}
            aria-labelledby="max-width-dialog-title"
            open={isOpen}
            TransitionComponent={Transition}
            fullWidth={true}
            maxWidth="sm"
          >
            <DialogTitle className={styles.center}>
              Add {product.name}
            </DialogTitle>
            <Box className={[styles.row, styles.center]}>
              <Button
                variant="contained"
                color="primary"
                disabled={quantity === 1}
                onClick={(e) => setQuantity(quantity - 1)}
              >
                <RemoveIcon />
              </Button>
              <TextField
                inputProps={{ className: styles.largeInput }}
                InputProps={{
                  bar: true,
                  inputProps: {
                    className: styles.largeInput,
                  },
                }}
                className={styles.largeNumber}
                type="number"
                variant="filled"
                value={quantity}
              />
              <Button
                variant="contained"
                color="primary"
                disabled={quantity === product.stock}
                onClick={(e) => setQuantity(quantity + 1)}
              >
                <AddIcon />
              </Button>
            </Box>
            <Box className={[styles.row, styles.around]}>
              <Button
                onClick={cancelOrRemoveFromOrder}
                variant="contained"
                color="primary"
                size="large"
                className={[styles.rounded, styles.largeButton]}
              >
                {orderItems.find((x) => x.name === product.name)
                ? 'Remove Product'
                : 'Cancel'}
              </Button>
              <Button
                onClick={addToOrderHandler}
                variant="contained"
                color="secondary"
                size="large"
                disabled={product.stock === 0}
                className={[styles.rounded, styles.largeButton]}
              >
                {orderItems.find((x) => x.name === product.name)
                ? 'Change Quantity'
                : 'Add to Order'}
              </Button>
            </Box>
          </Dialog>
          <Grid container>
            <Grid item md={2}>
              <List>
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  <>
                    <ListItem button onClick={() => categoryClickHandler("")}>
                      <Logo></Logo>
                    </ListItem>
                    {categories.map((category) => (
                      <ListItem
                        key={category.name}
                        button
                        onClick={() => categoryClickHandler(category.name)}
                      >
                        <Avatar
                          alt={category.name}
                          src={category.image}
                          className={styles.gray}
                        />
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Grid>
            <Grid item md={10}>
              <Typography
                gutterBottom
                className={[styles.title, styles.textWhite]}
                variant="h2"
                component="h2"
              >
                {categoryName || "Main Menu"}
              </Typography>
              <Grid container spacing={1}>
                {loadingProducts ? (
                  <CircularProgress />
                ) : errorProducts ? (
                  <Alert severity="error">{errorProducts}</Alert>
                ) : (
                  products.map((product) => (
                    <Grow key={product.name} direction="up" in={true}>
                      <Grid item md={6}>
                        <Card
                          className={[
                            styles.lessRounded,
                            styles.card,
                            styles.gray,
                          ]}
                        >
                          <CardActionArea
                            onClick={() => productClickHandler(product)}
                            disabled={product.stock === 0}
                          >
                            {product.stock === 0 ? (
                              <CardMedia
                                component="img"
                                alt={product.name}
                                image={product.disabledImage}
                                className={[styles.rounded, styles.media]}
                              />
                            ) : (
                              <CardMedia
                                component="img"
                                alt={product.name}
                                image={product.image}
                                className={styles.media}
                              />
                            )}
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="body2"
                                color="textPrimary"
                                component="p"
                              >
                                {product.name}
                              </Typography>
                              <Box className={styles.cardFooter}>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  component="p"
                                >
                                  {product.calorie} Cal
                                </Typography>
                                {(product.stock / product.initialStock) * 100 <=
                                10 ? (
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                  >
                                    Product at {Math.round((product.stock / product.initialStock) * 100)}% of stock
                                  </Typography>
                                ) : (
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                  >
                                    &nbsp;
                                  </Typography>
                                )}

                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  component="p"
                                >
                                  {product.price}€
                                </Typography>
                              </Box>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    </Grow>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box>
            <Box className={[styles.bordered, styles.space]}>
              My Order - {orderType} | Tax: {taxPrice}€ | Total: {totalPrice}€ |
              Items: {itemsCount}
            </Box>
            <Box className={[styles.row, styles.around]}>
              <Button
                onClick={() => {
                  clearOrder(dispatch);
                  props.history.push(`/`);
                }}
                variant="contained"
                color="primary"
                className={[styles.rounded, styles.largeButton]}
              >
                Cancel Order
              </Button>

              <Button
                onClick={previewOrderHandler}
                variant="contained"
                color="secondary"
                disabled={orderItems.length === 0}
                className={[styles.rounded, styles.largeButton]}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
