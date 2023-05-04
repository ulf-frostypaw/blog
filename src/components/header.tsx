import Link from 'next/link'
export default function Header() {
    return(
        <nav>
            <div className="container">
                <h3><Link href="/">Ulf FrostyPaw</Link></h3>
                <div className="left">
                    <Link href="/projects" className="link">
                        Proyectos
                    </Link>
                    <Link href="/contact" className="link">
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    )
}