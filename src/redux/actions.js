export const SET_TOY_NAME = 'SET_TOY_NAME';
export const SET_TOY_SPECIES = 'SET_TOY_SPECIES';
export const SET_TOY_DESCRIPTION = 'SET_TOY_DESCRIPTION';
export const ADD_TOY = 'ADD_TOY';
export const EDIT_TOY = 'EDIT_TOY';
export const SET_TOY_TO_EDIT = 'SET_TOY_TO_EDIT';
export const DELETE_TOY = 'DELETE_TOY';

export const setName = name => dispatch => {
  dispatch({
    type: SET_TOY_NAME,
    payload: name,
  });
};
export const setSpecies = species => dispatch => {
  dispatch({
    type: SET_TOY_SPECIES,
    payload: species,
  });
};
export const setDescription = description => dispatch => {
  dispatch({
    type: SET_TOY_DESCRIPTION,
    payload: description,
  });
};
export const addToy = toy => dispatch => {
  dispatch({
    type: ADD_TOY,
    payload: toy,
  });
};
export const editToy = toy => dispatch => {
  dispatch({
    type: EDIT_TOY,
    payload: toy,
  });
};
export const setToyToEdit = toy => dispatch => {
  dispatch({
    type: SET_TOY_TO_EDIT,
    payload: toy,
  });
};
export const deleteToy = toy => dispatch => {
  dispatch({
    type: DELETE_TOY,
    payload: toy,
  });
};
