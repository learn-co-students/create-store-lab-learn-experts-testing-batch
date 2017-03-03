export default function manageUsers(state={users: []}, action){
  switch(action.type){
    case "ADD_USER":
      var users = [...state.users];
      users.push({name: action.payload.name, hometown: action.payload.hometown});
      return Object.assign({}, state, {users: users});
    default:
      return state;
  }
}
