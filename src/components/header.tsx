import Link from 'next/link'
export default function Header() {
    return(
        <nav>
            <div className="container">
                <h2><Link href="/">U</Link></h2>
                <div className="left">
                    <Link href="/#about" className="link">
                        Acerca de
                    </Link>
                    <Link href="/#projects" className="link">
                        Proyectos
                    </Link>
                </div>
            </div>
        </nav>
    )
}