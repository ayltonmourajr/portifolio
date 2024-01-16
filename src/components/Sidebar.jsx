import Avatar from '../img/Aylton-cracha.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
       <img src={Avatar} alt='Aylton Jr' />
        <p className="title">Desenvolvedor Fullstack</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar