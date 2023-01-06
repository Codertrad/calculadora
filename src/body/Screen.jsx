import styled from 'styled-components'
import { CalcContext } from '../context/CalcContex'
import { useContext } from 'react'

export const Screen = () =>{
   const {Numbers} = useContext(CalcContext)

   return(
      <Container>
         <h1>{Numbers}</h1>
      </Container>
   )
}

const Container = styled.div`
   margin: 2rem auto;
   width: 90%;
   height: 5rem;
   background-color: #F3EFE0 ;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: end;
   h1{
      background-color: #F3EFE0;
      color: #222222;
      margin: 0 0.5rem;
   }
`