import React, {useState} from 'react' 
import CalculatorHeader from '../views/CalculatorHeader'
import CalculatorButtons from './CalculatorButtons'

function Calculator(props) { 
 
    let error = 'realy??'

    let [numberOne, setNumberOne] = useState('0') 
    // let [numberTwo, setNumberTwo] = useState(0) 
    let [res, setRes] = useState(0)
    let [subRes, setSubRes] = useState(0)
    let [currentAction, setCurrentAction] = useState(null)
    let [isFlag, setIsFlag] = useState(false) 

 
    function clickOnNumber(e) { 
     
        //после клика на Равно обнулить прошлые операции 
        if(currentAction==null && res !==0) {  
            setRes(0)
            setSubRes(0)
        }

        //запись числа 
        let newStringNumber = numberOne 
        if(newStringNumber !== 0) {
            newStringNumber = String(newStringNumber)
        }
        newStringNumber += e
        newStringNumber = Number(newStringNumber)
        setNumberOne(newStringNumber)   
    }

    function clickDistributor(e) { 
      
        if(e === 'equal') { 
            equal()
            return;
        }
        if(e === 'backspace') { 
            backspace()
            return;
        }
        if(e === 'clear') { 
            clear()
            return;
        }
        if(e === 'history') { 
            console.log('history')
            return;
        }
        if(e === 'comma') { 
            comma()
            return;
        }

        clickOnAction(e)
    }
      
    function clickOnAction(e) {   
        //если была ошибка вычислений и результат стал строкой. Например при делении на 0
        if(res === error) { 
            setRes(0)
            setSubRes(0)  
            console.log(error)
            return; 
        }
        // если второе число не было введено и был совершен повторный клик по действию(+-*/) 
        if(numberOne === '0') { 
            setCurrentAction(e)   
            return;
        }

        let number = Number(numberOne)
        if( isFlag === false ) { 
           if(subRes === 0) { 
                setSubRes(number) 
           } else {
               setSubRes(res)
           }
           setNumberOne('0')  
           setCurrentAction(e)  
           setIsFlag(true)
           return;
        } 
        else {  
            let result = countResult() 
            setSubRes(result) 
            setNumberOne('0')  
            setCurrentAction(e)  
        }
         
        
    } 

    function comma() {  
        let newStringNumber = numberOne   
       
        newStringNumber = String(newStringNumber)
        newStringNumber += '.'
 
        setNumberOne(newStringNumber)   
    }
    function equal() {  
        if(isFlag) {
            const result = countResult()
            setRes(result) 
            setSubRes(result) 
            setNumberOne(0) 

            setIsFlag(false)
            setCurrentAction(null)  
        }
        
    }

    function isLengthOfDecimalPart(number, length){
       let lenghtDP = (number.toString().includes('.')) ? (number.toString().split('.').pop().length) : (0)  
       if(lenghtDP > length) { 
            return true
       }  
       return false
    }

    function backspace() {  
        var newStringNumber = ''
        let numberToArray = String(numberOne).split('')

        if(numberToArray.length > 1) { 
            numberToArray.pop() 
        }
        else { 
            numberToArray = 0
            setNumberOne(numberToArray)
            return;
        }  

        for (let i = 0; i < numberToArray.length; i++) {  
            newStringNumber += numberToArray[i] 
        } 

        setNumberOne(newStringNumber) 
    }

    function clear() { 
        setIsFlag(false)
        setCurrentAction(null)
        setRes(0)
        setSubRes(0)
        setNumberOne('0')
    }

    function countResult () { 
        let result
        let number = Number(numberOne) 
        switch(currentAction) {
            case '+' : {
                result = subRes + number
            } ; break;
            case '/' : { 
                if(number === 0) result = error
                else result =  subRes / number
            } break;
            case '*' : {
                result =  subRes * number
            } ; break;
            case '-' : {
                result = subRes - number  
            }; break; 
            default: break;
        }  
        if(isLengthOfDecimalPart(result, 9) && typeof(result) === 'number') { 
            result = result.toFixed(9)
        }  
        return result 
    }

    return (
        <div className="calc-container"> 
           <CalculatorHeader 
                result={res}
                subResult={subRes} 
                currentAction={currentAction}
                numberOne={numberOne} 
                isFlag={isFlag}
            />  
           <CalculatorButtons  
                clickOnNumber={clickOnNumber}
                clickDistributor={clickDistributor}
            /> 
        </div>
    )
}
 
export default Calculator

