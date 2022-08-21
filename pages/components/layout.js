import Navigationbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className='container'>
        <Navigationbar />
        <div> {children} </div>
      </div>
    </>
  )
}

export default Layout
