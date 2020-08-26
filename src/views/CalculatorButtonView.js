import React from 'react' 

function CalculatorButtonView(props) {
    return (
        <div className='calc-button' onClick={ () => { props.handlerClickButton(props.action) }}>
            <span className={`${props.classes}`} > { props.number }</span>
        </div>
    )
}
  

export default CalculatorButtonView

