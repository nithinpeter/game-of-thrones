import firebaseApp from "../../helpers/firebase-app";

export const FETCH_GAME_REQUEST = "FETCH_GAME_REQUEST";
export const FETCH_GAME_SUCCESS = "FETCH_GAME_SUCCESS";
export const FETCH_GAME_FAILURE = "FETCH_GAME_FAILURE";

export const ITEM_DROPPED = "ITEM_DROPPED";


export function fetchGame(dispatch, id) {

    dispatch({
        type: FETCH_GAME_REQUEST,
    })

    firebaseApp.database().ref('game/' + id).on('value', function (snapshot) {

        console.log("SNAPSHOT::", snapshot.val());

        dispatch({
            type: FETCH_GAME_SUCCESS,
            body: snapshot.val(),
        })

    });
} 

export function itemDropped(dispatch, droppedItemId, id) {
    dispatch({
        type: ITEM_DROPPED,
        droppedItemId,
        id,
    })
}