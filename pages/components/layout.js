import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>layout</div>
      <div className='container'>
        <Navbar>
          <div> {children} </div>
        </Navbar>
      </div>
    </>
  )
}

export default Layout
