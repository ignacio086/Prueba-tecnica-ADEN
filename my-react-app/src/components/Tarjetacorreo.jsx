import '../style/App.css'
import Input from '../components/Input';
import Obutton from '../components/Obutton';

export default function Tarjetacorreo(){
    return(
        <div className='tarjeta-correo'>
            <>
                <Input style={{width:'30%',textAlign:'center'}} placeholder='ingresa tu correo electronico'></Input>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input className='checkin' type='checkbox'></input>
                    <p>Acepto la política de privacidad*</p>
                    <img style={{position:'absolute',right:'20%'}}src='/Group 696.png' alt='logo'></img>
                </div>
                <Obutton style={{width:'30%'}}>Suscribirme ahora</Obutton>
            </>
        </div>
    )
}