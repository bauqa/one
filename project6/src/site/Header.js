import apple from './img/c25c94fe96_1000.jpg'
import banan from './img/banan.jpg'
import Watermelon from './img/140px-Watermelon-2.jpg'
import Cantapoules from './img/275px-Cantaloupes.jpg'
import Persic from './img/300px-Prunus_persica_-_Peach_Hungary.jpg'
import {  useState } from 'react';
import './header.css';
//img
export default function Header(){
    const [block,setblock] = useState({data: [
        {name: 'Яблоко',category:'фрукт', img: apple,disc: 'Я́блоко — сочный плод яблони, который употребляется в пищу в свежем и запеченном виде, служит сырьём в кулинарии и для приготовления напитков.'},
        {name: 'Бананы',category:'ягода', img: banan,disc: 'Бана́н — название съедобных плодов культивируемых растений рода Банан (Musa)'},
        {name: 'Арбуз',category:'ягода', img: Watermelon,disc: 'Арбу́з обыкнове́нный[2] (лат. Citrúllus lanátus), или арбу́з шерсти́стый, или арбу́з столо́вый — однолетнее травянистое растение, вид рода Арбуз (Citrullus) семейства Тыквенные (Cucurbitaceae)'},
        {name: 'Дыня',category:'ягода', img: Cantapoules,disc: 'Ды́ня (лат. Cucumis melo) — растение семейства Тыквенные (Cucurbitaceae), вид рода Огурец (Cucumis), бахчевая культура.'},
        {name: 'Персик',category:'фрукт', img: Persic,disc: 'Пе́рсик (от лат. persicus, «персидский») — мягкий, сочный мясистый фрукт, плод персикового дерева'},

    ],
    categories: 'all'});
    let data = block.data
    if(block.categories && block.categories!=='all'){
        data = data.filter(d=> d.category=== block.categories)
    }
    // // let menuItem = [
    // //     {name: 'Articles',
    // //     link: '/'},
    // //     {name: 'Locations',
    // //     link: '/'},
    // //     {name: 'Videos',
    // //     link: 'https://www.odigo.com/'},
    // // ];
    // try{useEffect(()=>{
    //     const raw = localStorage.getItem('todos');
    //     setblock(JSON.parse(raw))
    // },[])}catch(e){

    // }
    
    // try{useEffect(()=>{
    //     localStorage.setItem('todos', JSON.stringify(block))
    // },[block])}catch(e){}
    // let objred = {style: 'red',category:'red'};
    // let obj = {style: 'green',category:'green'};
    // function addred(){
    //     block.data.push(objred)
    //     setblock(block)
    // }

    // function addgreen(){

    //     block.data.push(obj)
    //     setblock(block)
    // }
    return(<>
            
            <header className="header">
                <div className='container'>
                    <div className='buttons'>
                        <button className='btn ia' onClick={(prev)=>{
                            setblock({...block, categories: 'ягода'})
                        }}>Ягоды</button>
                        <button className='btn net' onClick={(prev)=>{
                            setblock({...block, categories: 'фрукт'})
                        }}>Фрукты</button>
                        <button className='btn all' onClick={(prev)=>{
                            setblock({...block, categories: 'all'})
                        }}>Все   </button>
                    </div>
                        <div className='product'>
                            
                            {data.map((item,idx)=>{
                            return(<div className='product_disc' key={idx}>
                                <h1 className='name'>{item.name}</h1>
                                <img src={item.img} className='img' alt='45'/>
                                <p className='disc'>{item.disc}</p>
                            </div>)
                            })}
                            
                        </div>
                    
                </div>      
            </header>
        </>
    
    );
}
