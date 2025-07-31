import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

createRoot(document.getElementById("root")!).render(<App />);
AOS.init();
