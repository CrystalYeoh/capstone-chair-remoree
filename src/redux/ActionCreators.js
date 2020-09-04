import * as ActionTypes from './ActionTypes'
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//thunk because it is gonna return a function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //supply a function with a delay of 2000 miliseconds
    setTimeout(() => {dispatch(addDishes(DISHES))},2000);
}

//returning an action
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const 