const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: "15" },
                { id: 2, message: 'Its my first post', likesCount: "20" },
            ],
            newPostText: "Print message..."
        },
        dialogsPage: {
            messagesData: [
                { message: "Hi", id: "1", direction: "to" },
                { message: "How're you?", id: "2", direction: "from" },
                { message: "Bye!", id: "3", direction: "from" },
                { message: "Yo", id: "4", direction: "to" },
                { message: "Rock", id: "5", direction: "from" }
            ],
            dialogsData: [
                { name: "Andrey", id: "1" },
                { name: "Boris", id: "2" },
                { name: "Stifler", id: "3" },
                { name: "John", id: "4" },
                { name: "Kevin", id: "5" }
            ]
        },
        sideBar: {
            links: [
                {
                    to: "profile",
                    text: "Profile"
                },
                {
                    to: "dialogs",
                    text: "Dialogs"
                },
                {
                    to: "news",
                    text: "News"
                },
                {
                    to: "music",
                    text: "Music"
                },
                {
                    to: "settings",
                    text: "Settings"
                }],
            friends: ["Andrey", "Boris", "Stifler", "John", "Kevin"]
        }
    },
    _subscriber() {},
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
    
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._subscriber(this._state);
    },
    updateNewPost(newPost) {
        this._state.profilePage.newPostText = newPost
        this._subscriber(this._state);
    },        
    subscribe(observer) {
        this._subscriber = observer
    }

}

//window.state = store.getState();

export default store
