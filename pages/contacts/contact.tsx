import styles from '../../styles/Home.module.scss'
import Heading from "../../components/heading";

export default function Comment() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Heading text='Comment:' tag={'h1'}/>
            </main>
        </div>
    );
};
