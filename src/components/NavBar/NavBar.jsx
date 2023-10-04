import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <section>
                <button>Mangas</button>
                <button>Comics</button>
                <button>Juegos de Mesa</button>
            </section>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar