import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import './styles/global.scss';


function App() {

    const Layout = () => {
        return (
            <div className="main">
               <Navbar />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/', element: <Layout />, children: [
                { path: '/', element: <Home /> },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;