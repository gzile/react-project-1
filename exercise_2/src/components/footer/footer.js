import './footer.css'

export const Footer = () => {
  const date = new Date().getFullYear();
  return(
    <footer>
      <div className='footer-wrapper'>
        <p>Copyrights {date}</p>
      </div>
    </footer>
  )
}