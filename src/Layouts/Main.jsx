import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
const Main = () => {
    return (
        <div >

            {/* nav bar */}
            <Navbar />
            
            {/* dynamic */}
            <Outlet />

        {/* footer */}
        <Footer />
        </div>
    );
};

export default Main;