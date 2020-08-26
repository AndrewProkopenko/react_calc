import React, {useState, useEffect} from 'react'

function CalculatorHeader(props) {
    let [smallText, setSmallText] = useState('') 
    let [largeText, setLargeText] = useState('0') 
    
   
    useEffect( () => {
        drawLargeText()
        drawSmallText() 
    }) 

    function drawSmallText() { 
        let text
        if(props.subResult !== 0 && props.isFlag ) { 
            text = props.subResult + ' ' + props.currentAction + ' ' 
        } else { 
            text = ''
        }
        setSmallText(text)
    }

    function drawLargeText() { 
        if(props.isFlag) {
            setLargeText(props.numberOne)
        } else { 
            if( props.result !== 0) setLargeText(props.result) 
            else setLargeText(props.numberOne)
        }  
    } 

    return (
        <div className='calc-container_header'>
           
            {/* <div className='d-flex flex-column my-4'>
               <span>subResult={props.subResult}  </span>
               <span> numberOne={props.numberOne}</span> 
               <b>_________________</b>
               <span>result={props.result} </span>
               <span> currentAction={props.currentAction} </span>
               <span> flag={`${props.isFlag }`} </span>
               <span>type of result = {typeof(props.result)} </span>
               <span>type of subResult = {typeof(props.subResult)} </span>
               <span>type of numberOne = {typeof(props.numberOne)} </span>
            </div> */}

            <div className='calc-container_header__small' >
                { smallText }
            </div>
           
            <div className={`${largeText === '0' ? 'zero' : '' } calc-container_header__large`} >
               { largeText }
            </div> 
        </div>
    )
}

export default CalculatorHeader
