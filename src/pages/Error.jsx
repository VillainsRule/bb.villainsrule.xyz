import Background from 'components/Background';

import styles from 'styles/error.module.css';

export default function Error({ title, description }) {
    return (
        <>
            <Background />

            <div className={styles.errorContainer}>
                <div className={styles.errorTitle}>{title} <img className={styles.errorIcon} src='/img/icon/face-injured.png' /></div>
                <div className={styles.errorDescription}>{description}</div>
            </div>
        </>
    )
}