import './board.css'

import {useState} from 'react'

import {Sqaure} from './sqaure'
const Board =()=>{
    const [state,setState]= useState(Array(9).fill(null));
    const [isXturn,setIsXturn]=useState(true);


   
    const checkwinner=()=>{
      const winnerLogic=  [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a] !== null && state[a]=== state[b]  && state[a] === state[c] ){
                return state[a]
            }
        }
        return false;
    }
    const winner=checkwinner();
    console.log(winner)

    const handelClick=(index)=>{
        const copystate=[...state];
        isXturn?copystate[index]='x':copystate[index]='o'
        
        setState(copystate)
        setIsXturn(!isXturn)
    }

    return (
        <div className="board-container">
        
      <div className='board-row'>
        <Sqaure onclick={()=>handelClick(0)} value ={state[0]}  />
        <Sqaure onclick={()=>handelClick(1)} value ={state[1]}/>
        <Sqaure onclick={()=>handelClick(2)}value ={state[2]}/>

        
            </div>
            <div className='board-row'>
        <Sqaure onclick={()=>handelClick(3)} value ={state[3]}/>
        <Sqaure onclick={()=>handelClick(4)} value ={state[4]}/>
        <Sqaure onclick={()=>handelClick(5)} value ={state[5]}/>

            </div >
            <div className='board-row'>
        <Sqaure onclick={()=>handelClick(6)} value ={state[6]}/>
        <Sqaure onclick={()=>handelClick(7)} value ={state[7]}/>
        <Sqaure onclick={()=>handelClick(8)} value ={state[8]}/>

            </div>


            {
                winner?<h2>Player {winner} is winner</h2>:<h2></h2>
            }
                <br />

          <button onClick={()=>setState(Array(9).fill(null))} style={{backgroundColor:"green",padding:"8px 20px",color:'white',marginTop:"20px",borderRadius:"5px",border:"none"}}>Start Again</button>

        </div>
    )
}


export {Board}