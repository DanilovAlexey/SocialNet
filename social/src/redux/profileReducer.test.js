import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

const state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: "15" },
        { id: 2, message: 'Its my first post', likesCount: "20" },
    ]
}

it('length posts shoul be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Test comment")
    // 2. test data
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
  });


  
it('message 3 should be Test comment', () => {
    // 1. test data
    let action = addPostActionCreator("Test comment")
    // 2. test data
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData[2].message).toBe("Test comment");

  });

  it('legth after deletig should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. test data
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(1);

  });


  

  
