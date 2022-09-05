import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { About } from '../pages/About';
import Login from '../pages/Login';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />   
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />                
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);