export default function manageUsers(state={users: []}, action){
  switch(action.type){
    case 'ADD_USER':
      let updatedState = {...state, users: [...state.users, action.payload]}
      return updatedState
    default:
      return state
  }
}
