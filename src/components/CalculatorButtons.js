import React from 'react'
import CalculatorButton from '../views/CalculatorButtonView' 

function CalculatorButtons(props) {
  
    function clickDistributor(e) {  
        if(typeof(e) === 'number') { 
            props.clickOnNumber(e) 
        }
        else { 
            props.clickDistributor(e)  
        }
    } 
  
    return ( 
        <div className='calc-container_buttons'>
            
            <CalculatorButton 
                number='' 
                classes='small' 
                action='history'
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                classes='clear' 
                number='C'   
                action='clear'
                handlerClickButton={clickDistributor} 
            /> 
            <CalculatorButton 
                classes='icon-left-1 icon' 
                action='backspace'
                handlerClickButton={clickDistributor} 
            /> 
            <CalculatorButton 
                classes='icon-divide icon' 
                action='/'
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='7' 
                action={7}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='8' 
                action={8}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='9' 
                action={9}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                classes='icon-cancel icon' 
                action='*'
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='4' 
                action={4}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='5' 
                action={5}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='6' 
                action={6}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                classes='icon-minus icon' 
                action='-'
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='1' 
                action={1}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='2' 
                action={2}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='3' 
                action={3}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                classes='icon-plus icon' 
                action='+'
                handlerClickButton={clickDistributor} 
            /> 
            <CalculatorButton 
                number=' ' 
                action={'history'}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                number='0'
                action={0}
                handlerClickButton={clickDistributor}  
            />
            <CalculatorButton 
                number=',' 
                action={'comma'}
                handlerClickButton={clickDistributor} 
            />
            <CalculatorButton 
                classes='icon-eq icon'
                action='equal'
                handlerClickButton={clickDistributor} 
            />  
        </div>
    )
}

export default CalculatorButtons
