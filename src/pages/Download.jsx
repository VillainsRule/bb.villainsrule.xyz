import { useState } from 'react';

import Background from '@components/Background';
import NavBar from '@components/NavBar';

import styles from '@styles/download.module.css';

export default function Download() {
    let [platform, setPlatform] = useState('chrome');

    let downloadLinks = {
        chrome: 'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo',
        edge: 'https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd',
        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/'
    };

    return (
        <>
            <Background />
            <NavBar />

            <div className={styles.tryBB}>Try BetterBlacket on {platform.charAt(0).toUpperCase()}{platform.slice(1)}!</div>

            <div className={styles.leftSites}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png' className={styles.siteIcon} style={{
                    filter: platform === 'chrome' ? 'drop-shadow(0 0 8px white)' : ''
                }} onClick={() => setPlatform('chrome')} />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/480px-Microsoft_Edge_logo_%282019%29.svg.png' className={styles.siteIcon} style={{
                    filter: platform === 'edge' ? 'drop-shadow(0 0 8px white)' : ''
                }} onClick={() => setPlatform('edge')} />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png' className={styles.siteIcon} style={{
                    filter: platform === 'firefox' ? 'drop-shadow(0 0 8px white)' : ''
                }} onClick={() => setPlatform('firefox')} />
            </div>

            <ol className={styles.tutorial}>
                <li>Download <a className={styles.link} href={downloadLinks[platform]} target='_blank'>Tampermonkey</a> from the official link.</li>
                <li>Visit <a className={styles.link} href='https://raw.githubusercontent.com/VillainsRule/BetterBlacket/master/dist/bb.user.js' target='_blank'>this link</a> to install!</li>
                <li>That's it! Enjoy BetterBlacket!</li>
            </ol>

            {platform !== 'chrome' ? <div className={styles.warning}>BetterBlacket was built in Chrome. Although we try to support all browsers, we can't guarentee everything works properly. If you're on another browser and find an issue, please let us know in the Discord.</div> : ''}
        </>
    )
}