import Navigationbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <Navigationbar />
        <div id="main"> 
          {children} 
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
