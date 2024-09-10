import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <div className='font-ubuntu bg-xExchange-Neutral/900'>
        <StrictMode>
            <App/>
        </StrictMode>,
    </div>
)
