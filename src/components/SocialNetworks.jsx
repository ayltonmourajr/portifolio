import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import '../styles/components/socialNetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />, link:"https://www."},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},
]

const SocialNetworks = () => {
  return(
    <section id="social-networks">
        {socialNetworks.maps((network) =>(
            <a href="#" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks