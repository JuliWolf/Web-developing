import {addFriend, deleteFriend, starFriend} from "../actions/FriendActions";

store.dispatch(addFriend('Barack Obama'));

store.dispatch(deleteFriend(1));

store.dispatch(starFriend(4));