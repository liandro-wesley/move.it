import styles from '../styles/components/ExperienceBar.module.css'

interface ProgressProps {
    levelUp: number;
    currentPercentage: number;
    color: string;
}

export function ExperienceBar() {
    let levelUp = 1200;
    let currentPercentage = 20;
    let color = 'red';

    function currentValue () {
        if (currentPercentage < 100) {
            return `${(levelUp * (currentPercentage / 100) )} xp`;
        } else {
            return '';
        }
    }

    if(currentPercentage >= 50 && currentPercentage < 99) {
        color = 'yellow';
    }

    if(currentPercentage === 100) {
        color = 'green';
    }

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${currentPercentage}%`, backgroundColor: `var(--${color})`}}/>
                <span className={styles.currentExperience} style={{left: `${currentPercentage}%`}}>{currentValue()}</span>
            </div>
            <span>{levelUp} xp</span>
        </header>
    );
}