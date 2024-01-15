import Avatar from '../img/Aylton-crachá.jpg'
import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
       <img src={Avatar} alt='Aylton Jr' />
        <p className="title">Desenvolvedor Fullstack</p>
        <SocialNetworks />
        <p> Informações para contato</p>
        <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar