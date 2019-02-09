import {database} from '../Database/config'

export const startAddingPost = (post) => {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(() => {
            dispatch(addPhoto(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const fetchPosts = () => {
    return ((dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts=[]
            snapshot.forEach((element) => {
                posts.push(element.val())
            });
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
    )
}

export const deletePosts = (index, id) => {
    return(dispatch) => {
        return database.ref(`posts/${id}`).remove(). then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const startAddingComments = (comments, postId) => {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comments). then(
            () => {
                dispatch(addComments(comments, postId))
            }
        ).catch((error) => {
            console.log(error)
        })
    }
}

export const startLoadingComments = () => {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=> {
            let comments ={}
            snapshot.forEach((element)=> {
                comments[element.key]=Object.values(element.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export const loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

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

export const loadPosts = (posts) => {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}