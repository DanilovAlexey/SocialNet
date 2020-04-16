let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: "15" },
            { id: 2, message: 'Its my first post', likesCount: "20" },
        ]
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
    }
}

export default state
