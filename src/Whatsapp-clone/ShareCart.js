import { DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@material-ui/core';
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import Cart from '../Myntra/Cart';

import './ShareCart.css'
// import CheckoutProduct from '../Myntra/CheckoutProduct';
// import Product from '../Myntra/Product';
import CheckoutProduct from '../Myntra/CheckoutProduct';
import { useStateValue } from '../StateProvider';
// import Product from '../Myntra/Product';
function ShareCart({id , image , title , price , rating }) {

  const [{cart ,user} , dispatch] = useStateValue();

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


    return (
        <div>
            <IconButton>
                    <ShoppingCartIcon
                     color="disabled" 
                     fontSize="large"
                     onClick={handleClickOpen}
                    ></ShoppingCartIcon>
                    </IconButton>

                    {/* Dialog box */}

                    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add from Cart
        </DialogTitle>
        <DialogContent dividers>
            <DialogContentText className = 'sc_dialog'>
            <div>
            <CheckoutProduct
                title = 'Saree mall Blue & Golden Quirky Print Saree'
                price = '999.00'
                image = 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12564560/2020/10/11/982b4a0a-96f7-4871-8fce-1f2b83c350261602402688515SareemallSeaGreenPolyChiffonSolidEthnicPartywearSareewithMat1.jpg'
                rating = {5}
                ></CheckoutProduct>
                <CheckoutProduct
                title = 'Women Printed Kurta with Trousers & Dupatta '
                price = '79,900.00'
                image = 'https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/7186142/2021/3/29/8b3e3d3c-619c-4c1a-bc0e-0b38d7052e8b1617000894042-Anouk-Women-Blue-Printed-Kurta-with-Trousers--Dupatta-783161-1.jpg'
                rating = {5}
                ></CheckoutProduct>
            <CheckoutProduct
                title = 'Printed Straight Kurta'
                price = '45,999.00'
                image = 'https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/8529019/2019/1/23/5d6a8e02-0fa0-4770-82f5-6b52d9c983561548242338312-Varanga-mustard-printed-straight-kurta-6361548242336928-1.jpg'
                rating = {5}
                ></CheckoutProduct>
                <CheckoutProduct
                title = 'Ethnic Print Kurta Set'
                price = '79,900.00'
                image = 'https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg'
                rating = {5}
                ></CheckoutProduct>
            </div>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Send this Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </div>
    )
}

export default ShareCart
