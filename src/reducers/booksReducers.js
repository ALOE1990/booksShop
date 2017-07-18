"use strict"

//BOOK REDUCER
export function booksReducers(state = {
    books:[]
    }, action) {
    switch(action.type){
        case "GET_BOOKS":
            return{...state, books:[...action.payload]}
        case "POST_BOOKS":
            //let books = state.books.concat(action.payload);
            return {...state, books: [...state.books, ...action.payload],
                msg:'Saved! Click to Continue', style:'success', validation:'success'};
            break;
        case "POST_BOOK_REJECTED":
            return{...state, msg:'Please, try again', style:'danger', validation:'error'};
        case "RESET_BUTTON":
            return{...state, msg:null, style:'primary', validation:null};
        case "DELETE_BOOK":
            const currentBooksToDelete = [...state.books];
            const indexToDelete = currentBooksToDelete.findIndex(
                function(book){
                    return book._id == action.payload;
                }
            )
            return {books:[...currentBooksToDelete.slice(0, indexToDelete), ...currentBooksToDelete.slice(indexToDelete + 1)]}
            break;
        case "UPDATE_BOOK":
            const currentBooksToUpdate = [...state.books];
            const indexToUpdate = currentBooksToUpdate.findIndex(
                function(book){
                    return book._id === action.payload._id;
                }
            )
            const newBookToUpdate = {
                ...currentBooksToUpdate[indexToUpdate], title: action.payload.title
            }
            console.log("new book to update: ", newBookToUpdate);
            return {books:[...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state;
}

