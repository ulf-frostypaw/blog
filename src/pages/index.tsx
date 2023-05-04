import {useEffect, useState} from 'react'
import Head from "next/head"
import Link from "next/link"
import Header from '../components/Header'
import {FaReact, FaHtml5, FaCss3Alt, FaPhp, FaTwitter} from 'react-icons/fa'
import {SiNextdotjs, SiGithub, SiTelegram} from 'react-icons/si'
export default function Home() {
  const [avatarURL, setAvatarURL] = useState();

  
  useEffect(() => {
    fetch("https://api.github.com/users/ulf-frostypaw")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
    <Head>
      <title>Ulf FrostyPaw</title>
    </Head>
    <Header />
    <div className="container">
      <div className="hero">
        <h1>Hola, soy Ulf</h1>
        <p>Un desarrollador web con muchos sueños y ganas de compartir sus conocimientos con el mundo.</p>
        <div className="hero-icons">
          <Link href="https://github.com/ulf-frostypaw"><SiGithub className='icon github' target='_blank' /></Link>
          <Link href="https://t.me/UlfFrostyPaw"><SiTelegram className='icon telegram' target='_blank' /></Link>
          <Link href="https://twitter.com/UlfFrostyPaw"><FaTwitter className='icon twitter' target='_blank' /></Link>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="about">
        <h2>Sobre mi</h2>
        <p>Soy un desarrollador Jr. con cinco años de experiencia(siento que todo el tiempo aprendo algo nuevo y sinceramente no me siento <i>"preparado"</i> para estar al siguiente nivel). Desde temprana edad la tecnología ha sido algo de lo que me ha atraído siempre, todo empezó con los simples juegos en Flash. <br /> Me gusta escribir, me gusta aprender idiomas, me fascina convivir con nuevas personas y escuchar todas sus experiencias.</p>
        <div className="flex">
          <img src={avatarURL} className='avatar' alt="" />
          <div className="tech">
            <div className="about-content">
              <h2>Font-end</h2>
              <div className="hero-icons">
                <div className="card">
                  <FaReact className='icon react' />
                </div>
                <div className="card">
                  <SiNextdotjs className='icon' />
                </div>
                <div className="card">
                  <FaHtml5 className='icon html5' />
                </div>
                <div className="card">
                  <FaCss3Alt className='icon css3' />
                </div>
              </div>
            </div>

            <div className="about-content">
              <h2>Back-end</h2>
              <div className="hero-icons">
                <div className="card">
                  <FaPhp className='icon php' />
                </div>
              </div>
              
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="projects">
        <h2>Proyectos</h2>
      </div>
    </div>
    <footer>
        <p>Hecho con ❤️</p>
    </footer>
    </>
  )
}
