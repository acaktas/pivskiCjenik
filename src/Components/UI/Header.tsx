import classes from './Header.module.scss'
import NavBar from './NavBar';

interface HeaderProps {
    session: string | null;
    setSession: (id?: string) => void
}

const Header = (props: HeaderProps) => {
    return <>
        <header className={classes.header}>
            <NavBar session={props.session} setSession={props.setSession}/>
        </header>
    </>
}

export default Header;