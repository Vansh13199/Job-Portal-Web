function Header(){
    let name="Vansh"
    return (
    <>
        <nav id="navbarr">
        <img id="logo" src="img.png" alt="loading" width={60} height={60} />
        <h4 id="h4">Name: {name}</h4>
        <p id="p"> Full Stack Developer | AWS Engineer</p>
        </nav>
        </>

    )
}
export default Header