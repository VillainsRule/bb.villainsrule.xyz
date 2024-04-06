import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Background from '@components/Background';
import NavBar from '@components/NavBar';

import styles from '@styles/plugins.module.css';

export default function Plugins() {
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/VillainsRule/BetterBlacket/master/dist/pluginData.json').then((res) => setPlugins(res.data));
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <Background />
            <NavBar />

            <div className={styles.plugins}>
                <div className={styles.topBanner}>
                    <div className={styles.bannerTitle}>Plugins</div>
                    <div className={styles.bannerDescription}>Our easy-to-use preinstalled plugins.</div>
                    <input className={styles.bannerSearch} placeholder='Search...'></input>
                </div>

                <div className={styles.pluginHolder}>
                    {plugins.length ? plugins.map((plugin) => (
                        <div className={styles.plugin} key={plugin.title} onClick={() => navigate('/plugins/' + plugin.title.replaceAll(' ', ''))}>
                            <div className={styles.pluginInfo}>
                                <div className={styles.pluginTitle}>{plugin.title}</div>
                                <div className={styles.pluginAuthor}>
                                    <img src={plugin.author.avatar} className={styles.pluginAuthorProfile} /> {plugin.author.name}
                                </div>
                                <div className={styles.pluginDescription}>{plugin.description}</div>
                            </div>
                        </div>
                    )) : <div className={styles.pluginMessage}>Plugins are loading...</div>}
                </div>
            </div>
        </>
    )
}