import { Link } from 'react-router-dom'
import '../style/App.css'
import { Icon } from '@iconify/react';

export default function Bar({tipo }){
    if(tipo==='nav'){
        return(
        
            <nav className="bar" style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
                <div></div>
                <img alt='logo' src='/cocteles.png' style={{width:'86px',height:'86px',objectFit:'contain'}}></img>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Link to='/' className="nav-a">Menú</Link>
                        <Link to='Recetas'  className="nav-a">Recetas</Link>
                </div>
            </nav>
        
        )
    }
    return(
        <footer className="bar" style={{backgroundColor:'#000',position:'relative',display:'flex',justifyContent:'center',alignItems:'center',bottom:0}}>
            <p style={{color:'white'}}>Aviso Legal. Política de privacidad. Política de cookies. Contacto <Icon icon="ph:copyright" />holacocteles.com</p>
        </footer>
    )
}