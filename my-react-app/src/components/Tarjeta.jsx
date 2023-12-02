import '../style/App.css'
import Obutton from './Obutton'

export default function Tarjeta({tipo , nombre ,img ,descripcion}){
    return(
        <div className={tipo=='slider' ? 'tarjeta' : 'tarjeta-s'}>
            <img alt='mojito'src={img}style={{height:'50%',width:'100%',objectFit:'cover'}}></img>
            <div style={{borderRadius:'1rem',display:'flex',flexDirection:'column',
            color:'#000',backgroundColor:'#fff', 
            height:'50%',width:'100%',
            alignItems:'center',justifyContent:'center', textAlign:'center'}}>
                <h1>{nombre}</h1>
                <h4 style={{width:'95%'}}>
                    {descripcion}
                </h4>
                <Obutton>Ver receta</Obutton>
            </div>
        </div>
    )
}