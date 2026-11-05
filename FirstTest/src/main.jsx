import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>Hello!Samia Azme.</p>
    <Breakfast />
  </StrictMode> 
)
function Breakfast()
{
  return <>
    <div>
      <h1>Javascript</h1>
    </div>React component
    
  </>
}