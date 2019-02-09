// remove
//Action Creators
export const removePost = (index) => {
    return {
        type : 'REMOVE_POST',
        index
    }
}

export const addPhoto = (photo) => {
    return {
        type: 'ADD_POST',
        photo
    }
}

export const addComments = (comments, postId) => {
    return {
        type: 'ADD_COMMENT',
        comments,
        postId
    }
}

//adding post