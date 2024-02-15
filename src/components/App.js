import '../assets/common/common.css';
import Footer from './Footer';
import Shared from '../pages/shared/Shared';
import Folder from '../pages/folder/Folder';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { profileData } from '../store/store';


function App() {
  const a = useRecoilValue(profileData);
  console.log(a);
  return (
    <>
      <Routes>
        <Route path="/" element={<div>main</div>}/>
        <Route path="/folder" element={<Folder/>}/>
        <Route path="/shared" element={<Shared/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
