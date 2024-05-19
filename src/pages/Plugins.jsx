import axios from 'axios';

import { useEffect, useState } from 'react';

import NavBar from 'components/NavBar';

import styles from 'styles/plugins.module.css';

export default function Plugins() {
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/VillainsRule/BetterBlacket/master/dist/pluginData.json').then((res) =>
            setPlugins(res.data.sort((a, b) => a.title.localeCompare(b.title))));
    }, []);

    return (
        <>
            <NavBar />

            <div className={styles.plugins}>
                <div className={styles.topBanner}>
                    <div className={styles.bannerTitle}>Plugins</div>
                    <div className={styles.bannerDescription}>Our advanced list of plugins preinstalled with BetterBlacket!</div>
                </div>

                <div className={styles.pluginHolder}>
                    {plugins.length ? plugins.map((plugin) => (
                        <div className={styles.plugin} key={plugin.title} onClick={() => window.open('https://bbd.villainsrule.xyz/plugins/' + plugin.path)}>
                            <div className={styles.pluginInfo}>
                                <div className={styles.pluginTitle}>{plugin.title}</div>
                                <div className={styles.pluginAuthors}>{plugin.authors.map((auth) => {
                                    return <img src={auth.avatar} className={styles.pluginAuthorProfile} key={auth.name} />
                                })}</div>
                                <div className={styles.pluginDescription}>{plugin.description}</div>
                            </div>
                        </div>
                    )) : <div className={styles.pluginMessage}>Plugins are loading...</div>}
                </div>
            </div>
        </>
    )
}