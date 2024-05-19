import { Link, useNavigate } from 'react-router-dom';

import styles from 'styles/global.module.css';

export default function NavBar({ home = false }) {
    let navigate = useNavigate();

    return (
        <>
            <div className={styles.navbar} id='navbar' style={{ opacity: home ? 0 : 1 }}>
                <div className={styles.left}>
                    <img className={styles.icon} src='/favicon.ico' />
                    <div className={styles.title} onClick={() => navigate('/')}>BetterBlacket</div>

                    <Link to='/download' className={styles.link}>Download</Link>
                    <Link to='/plugins' className={styles.link}>Plugins</Link>
                    <Link to='/why' className={styles.link}>Why BB?</Link>
                    <Link to='/faq' className={styles.link}>FAQ</Link>
                    <div className={styles.link} onClick={() => open('https://bbd.villainsrule.xyz')}>Docs</div>
                </div>

                <div className={styles.link}>Discord Support</div>
            </div>
        </>
    );
}