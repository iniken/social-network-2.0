import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://www.tropicbreeze.co.uk/blog/wp-content/uploads/2017/08/Nisbet-Plantation-1200-500.jpg"/>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;