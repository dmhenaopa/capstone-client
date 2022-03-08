import NavbarItem from "./navbar-items/navbar-item";

function Navbar() {
    return (
        <nav>
            <ul>
                <NavbarItem
                    link='#'
                    text={'Inicio'}
                />
                <NavbarItem
                    link='#'
                    text={'Productos'}
                />
                <NavbarItem
                    link='#'
                    text={'Nosotros'}
                />
                <NavbarItem
                    link='#'
                    text={'Contacto'}
                />
            </ul>
        </nav>
    );
}

export default Navbar;