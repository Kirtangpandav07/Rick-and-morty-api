
import './App.css';
import s1 from './s1.jpeg'
import s2 from './s2.jpeg'
import s3 from './s3.jpeg'
import s4 from './s4.jpeg'
import s5 from './s5.jpeg'
import s6 from './s6.jpeg'
import s7 from './s7.png'



import Card from "./components/Card";
import { useEffect, useState } from 'react';


function App(){
  const[cardData,setcardData]=useState([])

  useEffect(()=>{
    async function getData(){
      const unreadableData= await fetch("https://rickandmortyapi.com/api/character")
      const data = await unreadableData.json()
      console.log(data.results);
      setcardData(data.results)

      
    }
    getData()
  },[])


  // const Data=[
  //   {
  //    img:s1,
  //    name: "Adjudicator Rick",
  //    lname: "Dead - Huma",
  //    location: "Last known location",
  //    locname: "catadeil to rick",
  //    first: "first seen in",
  //     seen: " the rickadel mixup"
  //   },
  //   {
  //     img:s2,
  //     name: "Scary Terry",
  //     lname: "Alive Mythological Creature",
  //     location: "Last known location",
  //     locname: "Mr. Goldenfold's dream",
  //     first: "first seen in",
  //      seen: "LOWMORE DOG"
  //    },
  //    {
  //     img:s3,
  //     name: "Morthupsighn intrep",
  //     lname: "Alive - Alien",
  //     location: "Last known location",
  //     locname: "morgorome morithopice",
  //     first: "first seen in",
  //      seen: " the rickadel mixup"
  //    },
  //    {
  //     img:s4,
  //     name: "Adjudicator Rick",
  //     lname: "Dead - Alien",
  //     location: "Last known location",
  //     locname: "catadeil to rick",
  //     first: "first seen in",
  //      seen: " the rickadel mixup"
  //    },
  //    {
  //     img:s5,
  //     name: "Adjudicator Rick",
  //     lname: "Alive - Human",
  //     location: "Last known location",
  //     locname: "catadeil to rick",
  //     first: "first seen in",
  //      seen: " the rickadel mixup"
  //    },
  //    {
  //     img:s6,
  //     name: "Adjudicator Rick",
  //     lname: "Unknown - Human",
  //     location: "Last known location",
  //     locname: "catadeil to rick",
  //     first: "first seen in",
  //      seen: " the rickadel mixup"
  //    },
  // ]
  return(
    <div className="App">
      <div className='heder'>
        <div className='flex'>
          <div className='ww-1'>
            <img src={s7} width={60} alt="" />
          </div>
          <div className='ww-1'>
            <div className='flex'>
            <ul>
              <li>Docs</li>
              <li>About</li>
            </ul>
            <button>Support us</button>
            </div>
          </div>

        

        </div>

      </div>

      <div className='titlename'>
      <h1>The Rick and Morty API</h1>
      </div>
      <div className="master">
        {
          cardData.map((el,index)=>{
            return <Card image={el.image} name={el.name} status={el.status} species={el.species} 
            location={el.location.name} locname={el.location.name} 
            />
          })
        }
        
      </div>
    </div>
  );
};
export default App;