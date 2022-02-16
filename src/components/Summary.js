import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.div`
    padding: 1rem;
    text-align: center;
    background: #00838f;
    color: #fff;
    margin-top: 1rem;
    h2 {
        margin-top: 0;
    }
`

const brands = {
    american: 'Americano',
    european: 'Europeo',
    asian: 'Asiático',
}

const plans = {
    basic: 'Básico',
    complete: 'Completo',
}

export default function Summary({ data }) {
    const { brand, year, plan } = data

    if ([brand, year, plan].includes('')) return null

    return (
        <Container>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {brands[brand]}</li>
                <li>Año: {year}</li>
                <li>Plan: {plans[plan]}</li>
            </ul>
        </Container>
    )
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}
