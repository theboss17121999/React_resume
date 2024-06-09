import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavBar } from './components/TopBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RecoilRoot>
            <BrowserRouter basename="/React_resume/">
                <div  className=''>
                    <NavBar />
                </div>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </StrictMode>,
)
