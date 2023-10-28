import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import User from './pages/user/User';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/global.scss';

const queryClient = new QueryClient();

function App() {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <QueryClientProvider client={queryClient}>
                            <Outlet />
                        </QueryClientProvider>
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
                { path: '/users', element: <Users /> },
                { path: '/users/:id', element: <User /> },
                { path: '/products', element: <Products /> },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;