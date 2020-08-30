import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

let addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
let updateNewPostTextActionCreator = () => {
    return {
        type: {type: "UPDATE-NEW-POST-TEXT", text: text};
    }
}

const MyPosts = (props) => {

    let postElements = props.posts.map(p =>
        <Post mes={p.message} like={p.likesCount}/>
    )
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({addPostActionCreator});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

