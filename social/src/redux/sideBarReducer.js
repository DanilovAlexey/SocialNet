const initialState = {
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

export default (state = initialState, action) => state