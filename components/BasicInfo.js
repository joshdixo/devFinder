import React from "react";
import Date from "./Date";
import styles from '../styles/BasicInfo.module.scss';
import { HiExternalLink } from 'react-icons/hi'

const BasicInfo = ({ user }) => {
    const ghProfile = 'https://www.github.com/' + user.username;
    console.log(user);


    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={user.avatar} alt="avatar" />
            </div>

            <div className={styles.infoWrapper}>
                <span className={styles.name}>{user.name}</span>
                <a href={ghProfile} target='_blank'>
                    <span className={styles.username}>{user.username} <HiExternalLink /></span>
                </a>
                <Date dateString={user.regdate} />
            </div>
        </div>
    )
}

export default BasicInfo;
