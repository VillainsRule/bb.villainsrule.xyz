import { Link, useNavigate } from 'react-router-dom';

import styles from '@styles/global.module.css';

export default function NavBar() {
    let navigate = useNavigate();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.siteTitle} onClick={() => navigate('/')}>BetterBlacket</div>

                <div className={styles.headerLinks}>
                    <Link to='/download' className={styles.headerLink}>Download</Link>
                    <Link to='/plugins' className={styles.headerLink}>Plugins</Link>
                    <Link to='/faq' className={styles.headerLink}>FAQ</Link>
                </div>
            </div>
        </>
    );
}