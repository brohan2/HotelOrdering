
import './App.css';
import Navbar from './components/Navbar';
import Body from './CompControl/Body';
import {Routes,Route} from 'react-router-dom'
import Bircat from './CompControl/Bircat';
function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<><Navbar/><Body/></>}/>
  <Route path='/Biryani' element={<><Navbar/><Bircat catname="Biryani"/></>}/>
</Routes>
    {/* <Navbar/>
    <Body/> */}
    </>
  );
}

export default App;
