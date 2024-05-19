import NavBar from 'components/NavBar';

import styles from 'styles/why.module.css';

export default function Why() {    
    return (
        <>
            <NavBar />

            <div className={styles.main}>
                <div className={styles.header}>Why BetterBlacket?</div>
                <div className={styles.subheader}>You're probably wondering why you should even pick BB.<br />I mean, there are other mods with similar features, such as Flybird.</div>

                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/puzzle-piece.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>TONS of Plugins</div>
                        </div>
                        <div className={styles.featureDesc}>All plugins come prepackaged - no need to scour for URLs. The interface is simple & easy to use straightaway!</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/artist-palette.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Theme Support</div>
                        </div>
                        <div className={styles.featureDesc}>Between the Theme feature and the QuickCSS plugin, theme developers will never be disappointed! </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/money-bag.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Free!</div>
                        </div>
                        <div className={styles.featureDesc}>Literally nothing is locked behind a paywall of anykind. You can download it instantly, anytime!</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/rocket.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Quick Installation</div>
                        </div>
                        <div className={styles.featureDesc}>Install BetterBlacket on any browser in a few simple steps and takeoff!</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/hammer-pick.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Actively Maintained</div>
                        </div>
                        <div className={styles.featureDesc}>Glitches are fixed within hours, providing the best experience possible.</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/closed-book.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Heavily Documented</div>
                        </div>
                        <div className={styles.featureDesc}>Every part of the mod is documented, so you never get confused!</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/heart.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Instant Support</div>
                        </div>
                        <div className={styles.featureDesc}>Support is provided instantly in our Discord server if anything goes wrong.</div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.featureHeader}>
                            <img src='/img/icon/computer.png' className={styles.featureIcon} />
                            <div className={styles.featureTitle}>Open Source</div>
                        </div>
                        <div className={styles.featureDesc}>BetterBlacket is fully open source and developer-friendly for newer developers trying to contribute!</div>
                    </div>
                </div>
            </div>
        </>
    )
}