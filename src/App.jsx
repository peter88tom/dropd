import TopHeader from './components/TopHeader';
import TopMenu from './components/TopMenu';
import TopBanner from './components/TopBanner';
import ShowsBody from './components/ShowsBody';
import { Footer } from './components/Footer';
import { Router, Routes, Route, useNavigate, useRoutes} from '@solidjs/router';
//import ShowDetails from './components/routes/ShowDetails';
import { lazy } from 'solid-js';



//const shows = lazy( () => import('./components/ShowsBody')) ;
const ShowDetails = lazy( () => import('./components/routes/ShowDetails'));

function App() {

  return (
    <div>
        <TopHeader />
        <TopMenu />
        <TopBanner />
        <Routes>
          <Route path='/' component={<ShowsBody />} />
          <Route path='/watch/:slug' element={<ShowDetails />} />
        </Routes>
        <Footer />
       
    </div>
  );
}

export default App;