import React from "react";
import styles from '../styles/BasicInfo.module.scss';

const BasicInfo = ({user}) => {
    const ghProfile = 'https://www.github.com/'+user.username;

    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={user.avatar} alt="avatar" />
            </div>

            <div className={styles.infoWrapper}>
                <span className={styles.name}>{user.name}</span>
                <a href={ghProfile} target='_blank'>
                    <span className={styles.username}>{user.username}</span>
                </a>
                <span className={styles.date}>{user.regdate}</span>
            </div>
        </div>
    )
}

export default BasicInfo;
