import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Home from './components/Home'
import Gallary from './components/Gallary'
import ClothScreenPage from './components/Pages/ClothScreenPage'
import UmbrellaPage from './components/Pages/UmbrellaPage'
import SchoolUmbrellaPage from './components/Pages/SchoolUmbrellaPage'
import PoolUmbrellaPage from './components/Pages/PoolUmbrellaPage'
import PlasticAndWoodScreensPage from './components/Pages/PlasticAndWoodScreensPage'
import TensileStructureCanopyPage from './components/Pages/TensileStructureCanopyPage'
import SeatingUmbrellaPage from './components/Pages/SeatingUmbrellaPage'
import ParkingShadesPage from './components/Pages/ParkingShadesPage'
import IronFencePage from './components/Pages/IronFencePage'
import NetPage from './components/Pages/NetPage'
import OutdoorGardenUmbrellaPage from './components/Pages/OutdoorGardenUmbrellaPage'
import PoetryHousesPage from './components/Pages/PoetryHousesPage'
import RemoteControlAwningsPage from './components/Pages/RemoteControlAwningsPage'
import WinterSeatingUmbrellaPage from './components/Pages/WinterSeatingUmbrellaPage'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import WhyUs from './components/WhyUs.jsx'

const router = createBrowserRouter([
  {
    path: '/Fahad/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <> <div className='wrapper'><Home /><Gallary /> <div className="z-40 block md:hidden"> <WhyUs/></div>  <Footer /></div> </>
      },
    ]
  },
  {
    path: "/Fahad/umbrella",
    element: <><Navbar/> <UmbrellaPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/schoolUmbrella",
    element: <><Navbar/> <SchoolUmbrellaPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/poolUmbrella",
    element: <><Navbar/> <PoolUmbrellaPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/plasticScreen",
    element: <><Navbar/> <PlasticAndWoodScreensPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/tensileStructureCanopy",
    element: <><Navbar/> <TensileStructureCanopyPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/seatingUmbrellaOrPergolas",
    element: <><Navbar/> <SeatingUmbrellaPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/parkingShades",
    element: <><Navbar/> <ParkingShadesPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/clothScreen",
    element: <><Navbar/> <ClothScreenPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/ironFence",
    element: <><Navbar/> <IronFencePage/>  <Footer /> </>
  },
  {
    path: "/Fahad/net",
    element: <><Navbar/> <NetPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/outdoorGardenUmbrella",
    element: <><Navbar/> <OutdoorGardenUmbrellaPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/poetryHouses",
    element: <><Navbar/> <PoetryHousesPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/remoteControlAwnings",
    element: <><Navbar/> <RemoteControlAwningsPage/>  <Footer /> </>
  },
  {
    path: "/Fahad/winterSeatingUmbrellas",
    element: <><Navbar/> <WinterSeatingUmbrellaPage/>  <Footer /> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
