"use strict"
import axios from 'axios'

//GET CART
export function getCart(){
    return function (dispatch){
        axios.get('/api/cart')
            .then(function(response){
                dispatch({
                    type: "GET_CART",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "GET_CART_REJECTED",
                    msg: "error when getting the cart from the session"
                })
            })
    }
}

//ADD TO CART
export function addToCart(cart){
    return function(dispatch){
        axios.post("/api/cart", cart)
            .then(function (response){
                dispatch({
                    type: "ADD_TO_CART",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "ADD_TO_CART_REJECTED",
                    msg: 'error when adding to cart'
                })
            })
    }
}

export function deleteCartItem(cart){
    return function(dispatch){
        axios.post("/api/cart", cart)
            .then(function (response){
                dispatch({
                    type: "DELETE_CART_ITEM",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "DELETE_CART_ITEM_REJECTED",
                    msg: 'error when deleting item from cart'
                })
            })
    };
}

export function updateCart(_id, unit, cart){
    const currentBooksToUpdate = cart;
    const indexToUpdate = currentBooksToUpdate.findIndex(
        function(book){
            return book._id === _id;
        }
    );
    const newBookToUpdata = {
        ...currentBooksToUpdate[indexToUpdate],
        quantity: currentBooksToUpdate[indexToUpdate].quantity + unit
    };
    let cartUpdate = [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdata,...currentBooksToUpdate.slice(indexToUpdate + 1)];
    return function(dispatch){
        axios.post("/api/cart", cartUpdate)
            .then(function (response){
                dispatch({
                    type: "UPDATE_CART",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "UPDATE_CART_REJECTED",
                    msg: 'error when adding to cart'
                })
            })
    }
}
