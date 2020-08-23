import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (

            <div className={s.item}>

                <img src="https://avatars.mds.yandex.net/get-pdb/2300765/42437f80-e8ee-4d54-b163-13827b3090f5/s1200?webp=false" />
                {props.mes}

                <div>
                    <span>Like</span> {props.like}
                </div>

            </div>
    )
}

export default Post;