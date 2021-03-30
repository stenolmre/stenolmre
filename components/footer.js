import React from 'react'

const Footer = () => {
  return <footer>
    <p>Copyright @ 2020 by Sten Olmre. All rights reserved.</p>
    <div>
      <Link url="https://www.linkedin.com/in/sten-olmre-2232951b7/?originalSubdomain=fi" icon="fab fa-linkedin-in"/>
      <Link url="https://github.com/stenolmre" icon="fab fa-github"/>
      <Link url="https://instagram.com/stenolmre" icon="fab fa-instagram"/>
    </div>
  </footer>
}

const Link = ({ url, icon }) => <a href={url} target="_blank" rel="noopener noreferrer">
  <i className={icon}/>
</a>


export default Footer
