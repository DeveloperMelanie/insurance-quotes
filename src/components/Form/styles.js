import styled from '@emotion/styled'

export const Field = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    @media (min-width: 350px) {
        flex-wrap: nowrap;
    }
`

export const Label = styled.label`
    flex: 0 0 100px;
`

export const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #e1e1e1;
`

export const InputRadio = styled.input`
    margin: 0 1rem;
`

export const Button = styled.button`
    background: #1c8197;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 2rem;

    &:hover {
        background: #196f82;
    }
`

export const Error = styled.div`
    background: #b53737;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`
