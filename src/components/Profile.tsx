import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css'
export function Profile() {
    const { level} = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/liandro-wesley.png" alt="Liandro Wesley"/>
            <div>
                <strong>Liandro Wesley</strong>
                <p>
                    <img src="icons/level.svg" alt="levelUp"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}