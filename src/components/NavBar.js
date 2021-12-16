function NavBar (){
    return (
    <>
        <header>
                <div>
                    <a target="_blank" className="facebook" href="https://www.facebook.com/profile.php?id=100010447723135"><i className="fab fa-facebook"></i></a>
                    <a target="_blank" className="instagram" href="https://www.instagram.com/andreaguinder/"><i className="fab fa-instagram"></i></a>
                    <a target="_blank" className="behance" href="https://www.behance.net/andreaguinder"><i className="fab fa-behance"></i></a>
                    <p>Buscador</p>
                </div>
            <div>
                <img src="./components/img/logo-alyssa.png"/>
            </div>
                <nav>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faCoffee}/></a></li>
                        <li><a href="#">corazon</a></li>
                        <li><a href="#">shpopping cart</a></li>
                    </ul>
                </nav>
        </header>
    </>
    )
}

export default NavBar