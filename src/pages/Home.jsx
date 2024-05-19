import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useNavigate } from 'react-router-dom';

import NavBar from 'components/NavBar';

import styles from 'styles/home.module.css';

export default function Home() {
    let navigate = useNavigate();

    useGSAP(() => {
        gsap.to('#imagine', {
            opacity: 1,
            duration: 2,
            delay: 0.5
        });

        gsap.to('#better', {
            fontSize: '7vh',
            marginLeft: '0.5vw',
            duration: 0.25,
            delay: 3
        });

        gsap.to('#name', {
            opacity: 1,
            duration: 3,
            delay: 5
        });

        gsap.to(['#name', '#imagine', '#boring'], {
            opacity: 0,
            duration: 2,
            delay: 8,
            display: 'none'
        });

        gsap.to(['#navbar', '#feature', '#button', '#banner'], {
            display: '',
            opacity: 1,
            duration: 2,
            delay: 10
        })
    }, [gsap]);

    return (
        <>
            <NavBar home={true} />

            <div className={styles.introText}>
                <div className={styles.introQuery} id='boring'>has blacket simply gotten <span className={styles.bold}>boring?</span></div>
                <div className={styles.introResponse} id='imagine' style={{ opacity: 0 }}>imagine a mod that makes Blacket <span className={styles.bold} id='better'>better.</span></div>
                <div className={styles.name} id='name' style={{ opacity: 0 }}>BetterBlacket 🪄</div>
            </div>

            <img className={styles.banner} src='./img/banner.png' id='banner' style={{ opacity: 0, display: 'none' }} />

            <div className={styles.buttons} id='button' style={{ opacity: 0, display: 'none' }}>
                <div className={styles.button} onClick={() => window.open('https://github.com/VillainsRule/BetterBlacket')}>View on Github</div>
                <div className={styles.fullButton} onClick={() => navigate('/download')}>Download BetterBlacket</div>
                <div className={styles.button} onClick={() => window.open('https://discord.gg/5dR3ca38tB')}>Join the Discord</div>
            </div>
        </>
    )
}