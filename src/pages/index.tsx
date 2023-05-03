import Head from "next/head"
import Link from "next/link"
import {FaReact, FaHtml5, FaCss3Alt, FaPhp, FaTwitter} from 'react-icons/fa'
import {SiNextdotjs, SiJavascript, SiGithub, SiTelegram} from 'react-icons/si'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ulf FrostyPaw</title>
    </Head>
    <div className="container-grid">
      <div className="hero">
        <h2>Hola, soy</h2>
        <h1>Ulf FrostyPaw</h1>
        <p>Soy un programador web que dedica su mayor parte del tiempo en aprender cosas interesantes y compartirlas con el resto del mundo.</p>
      </div>
    </div>
    <div className="div-black"></div>
    <div className="container-grid">
      <div className="content">
        <h1>Proyectos</h1>
        <span>Algunos proyectos en los que he trabajado. </span>
        <div className="container">
          <div className="card">
            <h3>FurrApp</h3>
            <small>Una red social para furries.</small>
            <div className="links">
              <Link href="#" className="button">Ver repo</Link>
              <Link href="#" className="button">Saber más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="div-black"></div>
    <div className="container-grid">
      <div className="content">
        <h1>Herramientas de desarrollo</h1>
        <div className="container">
          <div className="card">
              <SiJavascript size={'5rem'} />
            <small>JavaScript</small>
          </div>
          <div className="card">
              <FaReact size={'5rem'} />
            <small>React</small>
          </div>
          <div className="card">
              <SiNextdotjs size={'5rem'} />
            <small>Next JS</small>
          </div>
          <div className="card">
              <FaHtml5 size={'5rem'} />
            <small>HTML</small>
          </div>
          <div className="card">
              <FaCss3Alt size={'5rem'} />
            <small>CSS</small>
          </div>
          <div className="card">
              <FaPhp size={'5rem'} />
            <small>PHP</small>
          </div>

        </div>
      </div>
    </div>
    <div className="div-black"></div>
    <div className="container-grid">
      <div className="content">
        <h1>Contacto</h1>
        <div className="container">
          <Link href={'https://twitter.com/UlfFrostyPaw'} target="_blank" className="card">
            <FaTwitter  size={'5rem'}/>
            <small>Twitter</small>
          </Link>
          <Link href={'https://github.com/ulf-frostypaw/'} target="_blank" className="card">
            <SiGithub  size={'5rem'}/>
            <small>Twitter</small>
          </Link>
          <Link href={'https://t.me/UlfFrostyPaw/'} target="_blank" className="card">
            <SiTelegram  size={'5rem'}/>
            <small>Telegram</small>
          </Link>
        </div>
      </div>
    </div>
    <footer>
        <p>Creado por Ulf FrostyPaw</p>
    </footer>
    </>
  )
}
