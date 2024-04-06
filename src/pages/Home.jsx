import { useNavigate } from 'react-router-dom';

import Background from '@components/Background';
import NavBar from '@components/NavBar';

import styles from '@styles/home.module.css';

export default function Home() {
    let navigate = useNavigate();

    return (
        <>
            <Background />
            <NavBar />

            <div className={styles.topText}>
                <div className={styles.modName}>BetterBlacket 🪄</div>
                <div className={styles.modDesc}>BetterBlacket is the best Blacket client mod.</div>
            </div>

            <div className={styles.buttons}>
                <div className={styles.button} onClick={() => window.open('https://github.com/VillainsRule/BetterBlacket')}>View on Github</div>
                <div className={styles.fullButton} onClick={() => navigate('/download')}>Download BetterBlacket</div>
                <div className={styles.button} onClick={() => window.open('https://discord.gg/5dR3ca38tB')}>Join the Discord</div>
            </div>

            <div className={styles.features}>
                <div className={styles.featureCard}>
                    <div className={styles.featureHeader}>
                        <img src='https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png' className={styles.featureIcon} />
                        <div className={styles.featureTitle}>Simple Installation</div>
                    </div>
                    <div className={styles.featureDesc}>Install BetterBlacket in your browser in a few simple steps and takeoff!</div>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureHeader}>
                        <img src='https://em-content.zobj.net/source/microsoft-teams/363/red-heart_2764-fe0f.png' className={styles.featureIcon} />
                        <div className={styles.featureTitle}>Easy Plugins</div>
                    </div>
                    <div className={styles.featureDesc}>All plugins come prepackaged - no need to scour for URLs. The interface is simple & easy to use straightaway!</div>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureHeader}>
                        <img src='https://em-content.zobj.net/source/microsoft-teams/363/hammer-and-pick_2692-fe0f.png' className={styles.featureIcon} />
                        <div className={styles.featureTitle}>Active Maintaining</div>
                    </div>
                    <div className={styles.featureDesc}>Glitches are fixed within hours, providing the best experience possible.</div>
                </div>
            </div>
        </>
    )
}