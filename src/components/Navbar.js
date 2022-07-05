const  Navbar = ({ header }) => {
    return (
        <nav className="navbar items-center justify-center italic font-mono flex text-[16px] lg:text-[30px] py-4 text-teal-500">
            <h1>{header}</h1>
            </nav>
    );
}
 
export default Navbar;