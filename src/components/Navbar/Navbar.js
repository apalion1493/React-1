import s from './Navbar.module.css';

const Navbar = () => {
    return(
        <aside className={s.sidebar}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar