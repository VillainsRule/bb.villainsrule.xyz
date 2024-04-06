import { Link } from 'react-router-dom';

import Background from '@components/Background';
import NavBar from '@components/NavBar';

import styles from '@styles/asked.module.css';

export default function FAQ() {
    let questions = [{
        question: 'Is BetterBlacket free?',
        answer: <>Not only is BetterBlacket free, it's fully open source on <Link className={styles.link} to='https://github.com/VillainsRule/BetterBlacket'>GitHub</Link>!</>
    }, {
        question: 'BetterBlacket doesn\'t work!',
        answer: <>First, try reloading the page. Your installation is likely outdated. Grab the latest from the Download page. If you\'re on the latest version, join us on Discord and open a post in #bugs.</>,
    }, {
        question: 'I want something changed!',
        answer: <><s>it's perfect already</s> Just join our <Link className={styles.link} to='https://discord.gg/5dR3ca38tB'>Discord server</Link> and open a post in #suggestions!</>
    }, {
        question: 'Is there a mobile version?',
        answer: <>Nope, sorry. It's very hard to inject scripts on mobile. If Blacket makes a mobile app, we'll reconsider.</>
    }, {
        question: 'How can I use plugins from other mods?',
        answer: <>You can't. However, you can join the <Link className={styles.link} to='https://discord.gg/5dR3ca38tB'>Discord server</Link> and open a post in #suggestions.</>
    }, {
        question: 'Will using BetterBlacket get me banned?',
        answer: <>Several owners of Blacket have been known to use BetterBlacket; it's not a problem. Despite this, you may face automated abuse bans if use other scripts with BetterBlacket running.</>
    }, {
        question: 'Why can\'t I use other mods and BetterBlacket at the same time?',
        answer: <>As mentioned above, this can cause temporary bans. In some cases, this can also cause root injection issues with BetterBlacket.</>
    }, {
        question: 'My themes broke, and I can\'t remove them! Help!',
        answer: <>Run <code>delete localStorage.bb_themeData</code> in the console & reload.</>
    }];

    return (
        <>
            <Background />
            <NavBar />

            <div className={styles.mainContent}>
                <div className={styles.header}>Frequently Asked Questions</div>
                <div className={styles.helpNote}>Before harassing me, consider reading what people ask a lot.</div>

                <div className={styles.questions}>{questions.map(({ question, answer }) => <div className={styles.question}>
                    <div className={styles.questionText}>{question}</div>
                    <div className={styles.answerText}>{answer}</div>
                </div>)}</div>
            </div>
        </>
    )
}