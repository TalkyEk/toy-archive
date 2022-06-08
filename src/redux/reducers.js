import {
  SET_TOY_NAME,
  SET_TOY_SPECIES,
  SET_TOY_DESCRIPTION,
  ADD_TOY,
  EDIT_TOY,
  SET_TOY_TO_EDIT,
  DELETE_TOY,
} from './actions';

const InitialState = {
  name: '',
  species: '',
  description: '',
  id: '',
  editMode: false,
  allToys: [],
};

function toyReducer(state = InitialState, action) {
  switch (action.type) {
    case SET_TOY_NAME:
      return { ...state, name: action.payload };
    case SET_TOY_SPECIES:
      return { ...state, species: action.payload };
    case SET_TOY_DESCRIPTION:
      return { ...state, description: action.payload };
    case ADD_TOY:
      console.log(action.payload);
      return { ...InitialState, allToys: [...state.allToys, action.payload] };
    case EDIT_TOY:
      return {
        ...InitialState,
        editMode: false,
        allToys: state.allToys.map(toy => {
          if (toy.id === action.payload.id) {
            return action.payload;
          }
          return toy;
        }),
      };
    case SET_TOY_TO_EDIT:
      return { ...state, editMode: true, ...action.payload };
    case DELETE_TOY:
      return { ...InitialState, allToys: [...state.allToys.filter(toy => toy.id !== action.payload.id)] };
    default:
      return state;
  }
}

export default toyReducer;
