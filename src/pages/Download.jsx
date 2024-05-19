import { useEffect, useState } from 'react';

import NavBar from 'components/NavBar';

import styles from 'styles/download.module.css';

export default function Download() {
    let [platform, setPlatform] = useState('unknown');
    let [platformExtended, setPlatformExtended] = useState('unknown');

    useEffect(() => {
        let agent = navigator.userAgent.toLowerCase();

        let browser = agent.includes('firefox') ? 'Firefox' :
            agent.includes('chrome') && window.chrome && !window.opr && !navigator.brave ? 'Chrome' :
                agent.includes('edg') ? 'Edge' : 'unknown';

        let extended = agent.includes('android') || agent.includes('ipad') || agent.includes('iphone') || agent.includes('ipod') ? 'Mobile' :
            agent.includes('safari') && !navigator.brave ? 'Safari' : 'unknown';

        setPlatform(browser);
        setPlatformExtended(extended);
    }, []);

    return (
        <>
            <NavBar />

            <div className={styles.header}>{platform !== 'unknown' ? <>Try BetterBlacket on {platform}!</> : <>Maybe soon...</>}</div>
            <div className={styles.subheader}>{
                platform !== 'unknown' ? <>Your browser has automatically been detected as {platform}.</> :
                    platformExtended !== 'unknown' ? <>Your browser has automatically been detected as {platformExtended}.</> :
                        <>Your browser could not be detected.</>
            }</div>

            {
                platform === 'Chrome' ? <>
                    <ol className={styles.body}>
                        <li>Download <a className={styles.link} href={'https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo'} target='_blank'>Tampermonkey</a> from the Chrome Web Store.</li>
                        <li>Once downloaded, visit <a className={styles.link} href='https://github.com/VillainsRule/BetterBlacket/raw/master/dist/bb.user.js' target='_blank'>this link</a> to install. It should prompt you to "Install" or "Update".</li>
                        <li>Click that, and reload Blacket. Enjoy BB!</li>
                    </ol>
                </> : platform === 'Firefox' ? <>
                    <ol className={styles.body}>
                        <li>Download <a className={styles.link} href={'https://addons.mozilla.org/en-US/firefox/addon/tampermonkey'} target='_blank'>Tampermonkey</a> from the Mozilla Addon Store.</li>
                        <li>Once downloaded, visit <a className={styles.link} href='https://github.com/VillainsRule/BetterBlacket/raw/master/dist/bb.user.js' target='_blank'>this link</a> to install. It should prompt you to "Install" or "Update".</li>
                        <li>Click that, and reload Blacket. Enjoy BB!</li>
                    </ol>
                </> : platform === 'Edge' ? <>
                    <ol className={styles.body}>
                        <li>Download <a className={styles.link} href={'https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd'} target='_blank'>Tampermonkey</a> from the Edge AddOn list.</li>
                        <li>Once downloaded, visit <a className={styles.link} href='https://github.com/VillainsRule/BetterBlacket/raw/master/dist/bb.user.js' target='_blank'>this link</a> to install. It should prompt you to "Install" or "Update".</li>
                        <li>Click that, and reload Blacket. Enjoy BB!</li>
                    </ol>
                </> : platformExtended === 'Safari' ? <>
                    <div className={styles.centeredBody}>BetterBlacket is not currently mainly supported on Safari. Although Tampermonkey as offered on the <a className={styles.link} href='https://apps.apple.com/us/app/tampermonkey/id1482490089'>App Store</a>, it costs money there, making it a bad choice.</div>
                </> : platformExtended === 'Mobile' ? <>
                    <div className={styles.centeredBody}>BetterBlacket is not currently mainly supported on mobile devices. Mobile development is very different from desktop development, and we currently don't have the time nor motivation to learn it.</div>
                </> : <>
                    <div className={styles.centeredBody}>Whatever potato browser you're on, it doesn't support BetterBlacket. Use Chrome.</div>
                </>
            }
        </>
    )
}