

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi,how are you?", likesCount: "22"},
                {message: "Good", likesCount: "15"},
                {message: "How do you do?", likesCount: "2"},
                {message: "It is OK!!?", likesCount: "212"},
                {message: "how are you?", likesCount: "73"}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            dialogs : [
                {id: "1", name: "Dimych"},
                {id: "2", name: "Andrey"},
                {id: "3", name: "Sveta"},
                {id: "4", name: "Sasha"},
                {id: "5", name: "Viktor"},
                {id: "6", name: "Valera"}
            ],
            messages : [
                {id: "1", message: "Hi"},
                {id: "2", message: "How is you it-kamasutra?"},
                {id: "3", message: "How are you?"},
                {id: "4", message: "What is your name?"},
                {id: "5", message: "Good!"},
                {id: "6", message: "Yo"}
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },

    addPost() {
        let  newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = " ";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
if(action.type ==="ADD-POST") {
    let  newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this._callSubscriber(this._state);
}
    }
}

export default store;
window.store = store;







