import '../style/Recetas.css'
import Bar from '../components/Bar'
import { Icon } from '@iconify/react';
import Input from '../components/Input';
import Obutton from '../components/Obutton';
import Tarjeta from '../components/Tarjeta';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  useSelector } from 'react-redux/es/hooks/useSelector';




function Recetas(){
    //variable para crear la url
    let urlApi=''
    //estado para guardar la informacion proveniente desde la api
    const [api, setApi] = useState([])
    //variable con useSelector para traer informacion desde la store: categoria y nombre de trago
    const drink = useSelector(state=>state.tragos)
    //variable con useSelector para traer informacion de la store: trago buscado
    const drinkHistory = useSelector(state=>state.historialTragos)
    //switch creado para variar la url de la api dependiendo la categoria y el trago
    switch(drink.categoria){
        case 'categorias':
            urlApi=`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink.drink}`
            break
        case 'nombre':
            urlApi=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.drink}`
            break
        case 'ingredientes':
            urlApi=`http://www.thecocktaildb.com/api/json/v1/1/search.php?i=${drink.drink}`
            break
        default:
            urlApi=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito`
            break
    }
    //estado para cambiar el texto del input
    const [trago,setTrago] = useState(drink.drink)
    //funcion para actualizar el texto del input
    const handleChange = (e)=>{
        setTrago(e.target.value)
    }
    const handleSubmit = ()=>{
        console.log(trago)
    }
    //hook usado para realizar el consumo de la api y actualizar el estado de api
    useEffect(() => {
        axios.get(urlApi).then((res) => {
            setApi(res.data.drinks);
        })
    });
    return(
    <main className='container' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Bar tipo={'nav'}/>
        <section className='f-div' >
            <div className='i-f-div'>
                <div style={{display:'flex', padding:24}}>
                    <div style={{display:'flex',alignItems:'center',padding:4,gap:12,marginTop:8,backgroundColor:'white',color:'black', width:'30%', borderRadius:'1rem'}}>
                        <Input list='bebidas' type='text' value={trago} onChange={handleChange} style={{width:'100%'}} placeholder={`Buscar  `}></Input>
                        <datalist id='bebidas'>
                            {
                                drinkHistory.map((trago)=>{
                                    return <option key={trago}value={trago}></option>
                                })
                            }
                        </datalist>
                        <button onClick={()=>{setTrago('')}} style={{backgroundColor:'#fff',border:'none' ,cursor:'pointer'}}> <Icon icon="fluent-mdl2:cancel"/></button>
                        <Icon icon="pepicons-pencil:line-y" />
                        <Icon icon="material-symbols:search" />
                    </div>
                    <Obutton onClick={()=>{handleSubmit()}}>Buscar</Obutton>
                </div>
                <p style={{marginLeft:25}}>Se encontraron {api.length} resultados de {drink.drink}</p>
                <h4 style={{marginLeft:25}}>Explora las siguientes opciones</h4>
                <div className='scroll-container 'style={{display:'flex',flexDirection:'row',overflowX:'scroll'}}>
                    {
                        api.map((trago)=>{
                            return(
                                <Tarjeta key={trago.idDrink} nombre={trago.strDrink} descripcion={trago.strInstructions} img={trago.strDrinkThumb}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <Bar/>
    </main>
    )

}


export default Recetas