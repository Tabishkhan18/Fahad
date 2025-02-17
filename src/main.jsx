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

const router = createBrowserRouter([
  {
    path: '/Fahad',
    element: <App/>,
    children: [
      {
        path: "",
        element: <> <div className='wrapper'><Home /><Gallary /><Footer /></div> </>
      },
      {
        path: "umbrella",
        element: <> <UmbrellaPage/> <Footer /> </>
      },
      {
        path: "schoolUmbrella",
        element: <> <SchoolUmbrellaPage/> <Footer /> </>
      },
      {
        path: "poolUmbrella",
        element: <> <PoolUmbrellaPage/> <Footer /> </>
      },
      {
        path: "plasticScreen",
        element: <> <PlasticAndWoodScreensPage/> <Footer /> </>
      },
      {
        path: "tensileStructureCanopy",
        element: <> <TensileStructureCanopyPage/> <Footer /> </>
      },
      {
        path: "seatingUmbrellaOrPergolas",
        element: <> <SeatingUmbrellaPage/> <Footer /> </>
      },
      {
        path: "parkingShades",
        element: <> <ParkingShadesPage/> <Footer /> </>
      },
      {
        path: "clothScreen",
        element: <> <ClothScreenPage/> <Footer /> </>
      },
      {
        path: "ironFence",
        element: <> <IronFencePage/> <Footer /> </>
      },
      {
        path: "net",
        element: <> <NetPage/> <Footer /> </>
      },
      {
        path: "outdoorGardenUmbrella",
        element: <> <OutdoorGardenUmbrellaPage/> <Footer /> </>
      },
      {
        path: "poetryHouses",
        element: <> <PoetryHousesPage/> <Footer /> </>
      },
      {
        path: "remoteControlAwnings",
        element: <> <RemoteControlAwningsPage/> <Footer /> </>
      },
      {
        path: "winterSeatingUmbrellas",
        element: <> <WinterSeatingUmbrellaPage/> <Footer /> </>
      },
      
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
