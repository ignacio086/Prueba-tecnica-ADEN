import { useState } from 'react';
import '../style/App.css'
import Bar from '../components/Bar'
import Button from '../components/Button'
import { Icon } from '@iconify/react';
import Input from '../components/Input';
import Obutton from '../components/Obutton';
import Tarjeta from '../components/Tarjeta';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tarjetacorreo from '../components/Tarjetacorreo';

function Home() {
  //uso de hook useDispatch para realizar acciones a la store
  const dispatch = useDispatch()
  //estado que guarda la palabra del tipo de busqueda(place=placeholder)
  const [place,setPlace]= useState('nombre')
  //estado que guarda la palabra buscada para el historial
  const [drink,setDrink]= useState('')
  //hook usado para navegar entre paginas
  const navigation = useNavigate()
  //funcion creada para actualizar el estado de la palabra en el input
  const handleChange = (e)=>{
    setDrink(e.target.value)
  }
  //funcion que se ejecuta en onClick, la cual acciona dos reducer y navega a la siguiente pagina
  const handleSubmite = ()=>{
    dispatch({type:'@drink/name',payload:{
      categoria:`${place}`,
      drink:`${drink}`
      }});
      dispatch({type:'@drink/history',payload:`${drink}`});
    navigation('/Recetas')
  }
  return (
    <main className='main' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Bar tipo={'nav'} categoria={place}/>
      <section className='f-div' >
        <div className='i-f-div'>
          <div style={{width:'80%',paddingLeft:'10%',paddingTop:'10%'}}>
            <h1>Encuentra las<br/> mejores recetas<br/> en Cócteles</h1>
            <p style={{marginTop:'40px'}}>¿Que trago te gustaría preparar hoy?</p>
            <div style={{display:'flex',gap:8}}>
              <Button $buttonColor={place=='nombre' ? '#FFDE59':'white'} onClick={()=>{
                setPlace('nombre')
              }}>Por nombre</Button>
              <Button $buttonColor={place=='ingredientes' ? '#FFDE59':'white'} onClick={()=>{
                setPlace('ingredientes')
              }}>Por ingredientes</Button>
              <Button $buttonColor={place=='categorias' ? '#FFDE59':'white'} onClick={()=>{
                setPlace('categorias');
              }}>Por categorías</Button>
            </div>
            <div style={{display:'flex'}}>
              <div style={{display:'flex',alignItems:'center',padding:4,gap:12,marginTop:8,backgroundColor:'white',color:'black', width:'30%', borderRadius:'1rem'}}>
                <Icon icon="material-symbols:search" />
                <Input name='drink' value={drink} onChange={handleChange} style={{width:'100%'}} placeholder={`Buscar el trago por ${place}`}></Input>
              </div>
                <Obutton onClick={handleSubmite}>Buscar</Obutton>
            </div>
            <div className='esfera'></div>
          </div>
        </div>
      </section>
      <section  className='s-div'style={{ height:808,width:'100%', color:'white', display:'flex', justifyContent:'center', alignItems:'center', gap:20}}>
        <Tarjeta tipo={'slider'} nombre={'Mojito Malibu'} descripcion={'La combinacion de sabor dulce, citrico y menta complementa el sabor del ron, y hace dlem mojito una bebida ideal para el verano'} img={'/mojito.png'}/>
        <div style={{width:'30%'}}>
          <h1>Los tragos <span className={place=='nombre'?'spantext2':'spantext'}>más elegidos</span></h1>           
          <p>
            ¡Explora un munedo de sabores en cada sorbo!<br/>
            <br/>Descubre nuestra exquisita selección de tragos, donde cada día te presentamos las opciones más elegantes y cautivadoras.<br/>
            <br/> ¡Deleita tus sentidos con nuestras creaciones únicas y vive momentos inolvidables con cada copa! 
          </p>
        </div>
      </section>
      <section className='t-div' style={{width:'80%',height:940,color:'white'}}>
        <div>
          <h1>No esperes más,<br/>conviertete en un <span className='spantext2'>experto coctelero</span></h1>
          <p>Recibe en tu correo las mejores recetas,consejos y mucho más.</p>
        </div>
        <Tarjetacorreo/>
      </section>
      <Bar/>
    </main>
  )
}

export default Home