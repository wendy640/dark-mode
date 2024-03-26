import React from 'react'
import "./Footer.css"
const Footer = ({theme}) => {
  return (
    <footer data-theme={theme}className='--flex-center'>
   <p>Copyright &copy; 2022.</p>
   </footer>
  )
}

export default Footer
