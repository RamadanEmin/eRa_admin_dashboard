import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './styles/global.scss';


function App() {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                    </div>
                    <div className="contentContainer">
                            <Outlet />
                    </div>
                </div>
                <Footer />
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