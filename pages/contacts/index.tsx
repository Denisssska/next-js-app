import styles from "../../styles/Home.module.scss";
import Heading from "../../components/heading";

export default function Comments() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Heading text='Comments list:' tag={'h1'}/>
            </main>
        </div>
    )
}