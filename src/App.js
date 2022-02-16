import { useState } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'

import styled from '@emotion/styled'

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    border-radius: 50px;
`

const FormContainer = styled.div`
    background: #fff;
    padding: 3rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export default function App() {
    const [summary, setSummary] = useState({
        cotization: 0,
        data: {
            brand: '',
            year: '',
            plan: '',
        },
    })

    const { data, cotization } = summary

    return (
        <Container>
            <Header title='Cotizador de Seguros' />

            <FormContainer>
                <Form setSummary={setSummary} />

                <Summary data={data} />

                <Result cotization={cotization} />
            </FormContainer>
        </Container>
    )
}
