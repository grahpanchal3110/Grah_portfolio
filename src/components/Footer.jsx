import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src="https://avatars.githubusercontent.com/u/116339945?v=4" alt="Founder" />

            <h2>Grah Panchal</h2>
            <p>Motivation is temporary, but Discipline last forever.</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
            <a href="https://instagram.com/im_grahp3110?igshid=NzZlODBkYWE4Ng==" target={"blank"}>
                <AiFillInstagram/>
            </a>

            <a href="https://www.linkedin.com/in/grah-panchal-919356230" target={"blank"}><AiFillLinkedin/>
            </a>

            <a href="https://www.facebook.com/grah.panchal.18?mibextid=nW3QTL" target={"blank"}><AiFillFacebook/>
            </a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer