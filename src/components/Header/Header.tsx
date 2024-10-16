import Link from "next/link"
import "../Header/Header.css"
export function Header(){
    return(
        <div className="header">
            <ul className=" headerbuttons">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/personal-info"}><li>Prsonal-Info</li></Link>
                <Link href={"/education"}><li>Education</li></Link>
                <Link href={"/projects"}><li>Projects</li></Link>    
            </ul>
        </div>
    );
};
