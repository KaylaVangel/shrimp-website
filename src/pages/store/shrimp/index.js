import StoreLayout from '../../../components/store-layout.js'

const Shrimp = ({type}) => {
  return (
    <>  
      <h1>Shrimp</h1>
      <p>All shrimp listed are homebreed and available for local pickup only in Swansea, MA. All orders are "random scoop", 
        I do not guarantee gender.</p>
      <StoreLayout type={type} />
    </>
  )
}

export default Shrimp
