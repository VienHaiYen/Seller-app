import Category from "./components/Category"
import Header from "./components/Header"
import NavChange from "./components/NavChange"
function App() {

  return (
    <div className="App" >
      <Header/>
      <div className=" max-w-7xl m-auto">
        <NavChange />
        <Category/>
      </div>
    </div>
  )
}

export default App
