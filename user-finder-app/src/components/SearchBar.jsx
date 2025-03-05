import Logo from "../assets/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-removebg-preview.png"

export default function SearchBar () {
    return (
        <>
        <nav className="overflow-hidden flex justify-between items-center m-0 h-[4rem] bg-[var(--primary-color)]">
            <img src={Logo} className=" h-9/10"/>
            <div className="flex m-2 w-2/10 justify-between items-center">
                <input type="text" className="m-1 bg-[var(--bg-color)] block"/>
                <i className="m-1 fa-search fa-solid fa-lg text-[var(--text-color)] block" ></i>
            </div>        
        </nav>
        </>
    )
}