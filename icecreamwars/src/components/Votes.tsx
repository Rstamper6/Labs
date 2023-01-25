import { useState } from 'react';
import '../css/Votes.css'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Votes(){
    const [chocVotes, setChocVotes] = useState<number>(0);
    const [vanVotes, setVanVotes] = useState<number>(0);
    const [strawVotes, setStrawVotes] = useState<number>(0);


    let total = chocVotes + vanVotes + strawVotes;
    
    return(
        <div className='vote'>
            <h1>Vote Here</h1>

            <div id='voteBut'>
                <button onClick={() => setChocVotes(chocVotes + 1)} defaultValue='choco' className='voteButs'>Chocolate</button>
                <button onClick={() => setVanVotes(vanVotes + 1)} defaultValue='van' className='voteButs'>Vanilla</button>
                <button onClick={() => setStrawVotes(strawVotes + 1)} defaultValue='straw' className='voteButs'>Strawberry</button>
            </div>

            <div id='results'>
                    {
                        total <= 0 ? <p>No votes yet</p>
                        :
                        <div>
                        <div className='labelDiv'>
                            <p>Chocolate:</p>
                            <p className='voteNum'>{chocVotes}</p>
                            {/* <p>{`${((chocVotes / total)*100).toFixed(0)}%`}</p> */}
                        </div >
                            <ProgressBar bsPrefix='choco' label={`${((chocVotes / total)*100).toFixed(0)}%`} className='chocolate' now={(chocVotes / total)*100} />                       
                        
                        <div className='labelDiv'>
                            <p>Vanilla:</p>
                            <p className='voteNum vanVoteNum'>{vanVotes}</p>
                            {/* <p>{`${((vanVotes / total)*100).toFixed(0)}%`}</p> */}
                        </div>
                            <ProgressBar bsPrefix='vanilla' label={`${((vanVotes / total)*100).toFixed(0)}%`} className='Vanilla' now={(vanVotes / total)*100} />
                        
                        <div className='labelDiv'>
                            <p>Strawberry:</p>
                            <p className='voteNum'>{strawVotes}</p>
                            {/* <p>{`${((strawVotes / total)*100).toFixed(0)}%`}</p> */}
                        </div>                        
                            <ProgressBar bsPrefix='straw' label={`${((strawVotes / total)*100).toFixed(0)}%`} className='strawberry' now={(strawVotes / total)*100} />
                    </div>
                    }



            </div>
        </div>
        
    )
}

export default Votes;