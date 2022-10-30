import styles from '../styles/navBar.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import Image from 'next/image';

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'},
]

const NavBar = () => {
    const {pathname} = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src='/Logo.png' alt='webDev' width={60} height={60}/>
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} legacyBehavior href={path}><a
                        className={pathname === path ? styles.active : undefined}>{title}</a></Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;