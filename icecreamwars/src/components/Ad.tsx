import '../css/Ad.css'

interface AdProperties{
    flavor:string,
    theme:boolean,
    fontSize:number
}
export function Ad(props:AdProperties){
    return(
        <div id='ad'>
            <p>Vote For</p>
            <p className='flav' style={{fontSize : props.fontSize, marginTop: 0}}>{props.flavor}</p>
        </div>
    )
}