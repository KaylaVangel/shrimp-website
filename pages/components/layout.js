import Navigationbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>layout</div>
      <div className='container'>
        <Navigationbar>
          <div> {children} </div>
        </Navigationbar>
      </div>
    </>
  )
}

export default Layout
