import React, {useState, } from 'react'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [word, setWord] = useState('')
    const [dictionaryResult, setDictionaryResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState()
    console.log(errorMessage,">>>>errorMessage");

    const fetchData = async () => {
         try{
          let dictionaryData = await axios.get (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          const result = dictionaryData?.data; 
          console.log(result,">>>>>dictionaryData");
          setDictionaryResult(result[0])
          setErrorMessage("") 
        } 
        catch (error) {
          setDictionaryResult("")
          setErrorMessage(error.response.data.message);
        }
      }

    const playAudio = (aud) => {
        document.getElementById("aud").src = aud
        document.getElementById("aud").play()
    }

//     const rendermeaning =(meanings)=>(
//         <div>
//             {meanings?.partOfSpeech}
//             {meanings?.definitions.map((val)=>(
//                 <div>
//                     {val?.definition}
//                     {val?.example}
//                 </div>
//             ))}
//         </div>
//     )
// const renderData= (data)=>(
//     <div>
//       {data?.meanings?.map(rendermeaning)}
//     </div>
// )
const renderData= (d, index) => {
return(
    <div key={index}>
    <p> <span style={{color:"#0080ff"}}>Word: </span> {dictionaryResult?.word }</p>
    <p> <span style={{color:"#0080ff"}}>Parts of Speech: </span> {d?.partOfSpeech}</p>
        <div>
        <span style={{color:"#0080ff"}}>Definition: </span>
        {d?.definitions?.map((def, i) => (
            
            <p  key={i}> {def?.definition}</p>
        ))}
        </div>     
</div>
)
}
    return (
        <div className='main-container'>
            <Link style={{textDecoration:"none",color:"#0080ff"}} to={"/about"} >{"About>>"}</Link>
            <div className='search'>
                <input type="text" placeholder='Search the word...' onChange={(e) => {setWord(e.target.value)}}/>
                <img onClick={() => fetchData()} src="https://img.icons8.com/fluency-systems-regular/48/0080ff/search--v1.png" alt='' />
            </div>

            <div className='information-field'>
                <div className='c-head'>
                    <div>
                        <p>{word}</p>
                        <span>{dictionaryResult?.phonetic}</span>
                    </div>
                    <img onClick={() => playAudio(dictionaryResult?.phonetics[0].audio)} src="https://img.icons8.com/material-sharp/40/ffffff/high-volume--v1.png" alt='' />
                </div>

                <audio id='aud' src=""></audio>

                <div className='c-body'>
                   {dictionaryResult?.meanings?.map(renderData)}
                </div>
            </div>
           {errorMessage &&  <div>{errorMessage} </div>}
        </div>  
    )
}

export default Home
    

    // dictionaryResult?.map(
    //     (d, index) => (
    //         <div key={index}>
    //             <p>{d?.partOfSpeech}</p>
    //                 {d?.definitions?.map((def, i) => (
    //                     <p key={i}>{def?.definition}</p>
    //                 ))}
    //                  <p> {dictionaryResult?.word }</p>
    //         </div>
    //     )
    // )