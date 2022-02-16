import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.header`
    background: #fff;
    padding: 10px;
    padding-top: 3rem;
    font-weight: bold;
    color: #1c8197;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`

export default function Header({ title }) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
