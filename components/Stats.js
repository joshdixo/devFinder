import React from "react";
import styles from "../styles/Stats.module.scss"

const Stats = ({user}) => {
    return (
        <div className={styles.statsWrapper}>
            <div className={styles.stat}>
                <span className={styles.statTitle}>Repos</span>
                <span className={styles.statValue}>{user.repos}</span>
            </div>

            <div className={styles.stat}>
                <span className={styles.statTitle}>Following</span>
                <span className={styles.statValue}>{user.following}</span>
            </div>

            <div className={styles.stat}>
                <span className={styles.statTitle}>Followers</span>
                <span className={styles.statValue}>{user.followers}</span>
            </div>
        </div>
    )
}

export default Stats;