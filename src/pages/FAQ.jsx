import { Link } from 'react-router-dom';

import NavBar from 'components/NavBar';

import styles from 'styles/faq.module.css';

export default function FAQ() {
    let questions = [{
        question: 'Is BetterBlacket free?',
        answer: <>Not only is BetterBlacket free, it's fully open source on <Link className={styles.link} to='https://github.com/VillainsRule/BetterBlacket'>GitHub</Link> for you to learn from (+ hopefully contribute)!</>
    }, {
        question: 'BetterBlacket doesn\'t work!',
        answer: <>Your installation is likely outdated. Grab the latest from the Download page. If that doesn't work, join and ask in the Discord.</>,
    }, {
        question: 'Is there a mobile version?',
        answer: <>For now, sorry but no. Mobile development is an entire different department of code. If Blacket makes a mobile app, we'll consider it.</>
    }, {
        question: 'How can I use plugins from other mods?',
        answer: <>You can't. However, you can join the <Link className={styles.link} to='https://discord.gg/5dR3ca38tB'>Discord server</Link> and open a post in #suggestions for us to make it!</>
    }, {
        question: 'Will using BetterBlacket get me banned?',
        answer: <>Owners of Blacket use BetterBlacket themselves; it's not currently banned in any way.</>
    }, {
        question: 'My themes broke, and I can\'t remove them! Help!',
        answer: <>Run <code className={styles.code}>delete localStorage.bb_themeData</code> in the console & reload.</>
    }];

    return (
        <>
            <NavBar />

            <div className={styles.main}>
                <div className={styles.header}>Frequently Asked Questions</div>
                <div className={styles.subheader}>Before harassing us, consider reading what people ask a lot.</div>

                <div className={styles.questions}>
                    {questions.map(({ question, answer }) => <div className={styles.question}>
                        <div className={styles.questionText}>{question}</div>
                        <div className={styles.answerText}>{answer}</div>
                    </div>)}
                </div>
            </div>
        </>
    )
}