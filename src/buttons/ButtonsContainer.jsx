import styled from 'styled-components'
import { CalcContext } from '../context/CalcContex'
import { useContext } from 'react'

export const ButtonsContainer = () => {

const {addNum, clear, backSpace, result} = useContext(CalcContext)

return(<Container>
   <input onClick={addNum} type="button" name="7" value="7"/>
   <input onClick={addNum} type="button" name="8" value="8"/>
   <input onClick={addNum} type="button" name="9" value="9"/>
   <input className='operators' onClick={addNum} type="button" name="/" value="÷"/>
   <input onClick={addNum} type="button" name="4" value="4"/>
   <input onClick={addNum} type="button" name="5" value="5"/>
   <input onClick={addNum} type="button" name="6" value="6"/>
   <input className='operators' onClick={addNum} type="button" name="*" value="×"/>
   <input onClick={addNum} type="button" name="1" value="1"/>
   <input onClick={addNum} type="button" name="2" value="2"/>
   <input onClick={addNum} type="button" name="3" value="3"/>
   <input className='operators' onClick={addNum} type="button" name="+" value="+"/>
   <input className='operators' onClick={clear} type="button" value="AC"/>
   <input onClick={addNum} type="button" name="0" value="0"/>
   <input className='operators' onClick={backSpace} type="button" value="DEL"/>
   <input className='operators' onClick={result} type="button" value="="/>
</Container>)
}

const Container = styled.div`
   margin: 0 1rem;
   margin-bottom: 2rem;
   display:grid;
   grid-gap: .5rem;
   background-color:#434242 ;
   grid-template-columns: repeat(4,1fr);

   input{
      border-radius: 10px;
      background-color: #222222;
      width: 100%;
      height: 100%;
      font-size: 2rem;
      border: none;
      padding: .8rem 0;
      cursor: pointer;
      &:hover{
         background-color: #191919;
      }
   }

   .operators{
      background-color: #22A39F;
      &:hover{
         background-color: #22a38a;
      }
   }

`