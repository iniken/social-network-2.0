import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(p =>
        <Post mes={p.message} like={p.likesCount}/>
    )
    let newPostElement = React.createRef();

    let  addPost = () => {
        props.disPatch();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.disPatch();
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

