import React, {useState, useEffect} from 'react'
 
const Filtro = () =>{
    const [cervejas, setCerveja] = useState([]) 
    const [filtroCerveja, setFiltroCerveja] = useState([])
    const [busca, setBusca] = useState('')
 
 
    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
            .then(resposta => resposta.json())
            .then(dados => setCerveja(dados))
    },[])
 
 
    useEffect(()=>{
        setFiltroCerveja(
            cervejas.filter(cerveja => {
                return cerveja.name.includes(busca)
            })
        )
    },[busca, cervejas])
 
    return(
        <>
            <input onChange={e=>{setBusca(e.target.value)}} placeholder="Digite uma cerveja"/>
            {filtroCerveja.map(cerveja=> (
                <div class="conteudo" key={cerveja.id}>
                    <p><strong>Nome da cerveja:</strong> {cerveja.name}</p>
                    <p><strong>Descrição:</strong> {cerveja.description}</p>
                    <p><strong>Combina com qual comida?</strong> {cerveja.food_pairing}</p>
                    <p><strong>Gradação alcoólica:</strong> {cerveja.abv}</p>
                    <p><strong>Amargor:</strong> {cerveja.ibu}</p>
                    <img src={cerveja.image_url} alt={cerveja.name}/>
                    <hr></hr>
                </div>
                
            ))}
        </>
    )
}
 
export default Filtro
