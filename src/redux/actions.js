// remove
//Action Creators
export const removePost = (index) => {
    return {
        type : 'REMOVE_POST',
        index: index
    }
}

export const addPhoto = (photo) => {
    return {
        type: 'ADD_POST',
        photo: photo
    }
}



//adding post