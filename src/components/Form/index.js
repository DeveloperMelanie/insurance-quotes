import { useState } from 'react'
import PropTypes from 'prop-types'

import { getYearDifference, calculateBrand, getPlan } from '../../helpers'

import { Field, Label, Select, InputRadio, Button, Error } from './styles'

export default function Form({ setSummary }) {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
    })
    const [error, setError] = useState(false)

    const { brand, year, plan } = data

    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if ([brand, year, plan].includes('')) {
            setError(true)
            return
        }
        setError(false)

        let result = 2000

        const yearDifference = getYearDifference(year)
        result -= (yearDifference * 3 * result) / 100
        result = calculateBrand(brand) * result
        result = parseFloat(getPlan(plan) * result).toFixed(2)

        setSummary({
            cotization: +result,
            data,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <Field>
                <Label htmlFor='brand'>Marca</Label>
                <Select
                    id='brand'
                    name='brand'
                    value={brand}
                    onChange={getData}
                >
                    <option value=''>Selecciona</option>
                    <option value='american'>Americano</option>
                    <option value='european'>Europeo</option>
                    <option value='asian'>Asiático</option>
                </Select>
            </Field>

            <Field>
                <Label htmlFor='year'>Año</Label>
                <Select id='year' name='year' value={year} onChange={getData}>
                    <option value=''>Selecciona</option>
                    <option value={new Date().getFullYear()}>
                        {new Date().getFullYear()}
                    </option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <div>
                    <InputRadio
                        type='radio'
                        name='plan'
                        value='basic'
                        id='basic'
                        checked={plan === 'basic'}
                        onChange={getData}
                    />
                    <label htmlFor='basic'>Básico</label>
                </div>
                <div>
                    <InputRadio
                        type='radio'
                        name='plan'
                        value='complete'
                        id='complete'
                        checked={plan === 'complete'}
                        onChange={getData}
                    />
                    <label htmlFor='complete'>Completo</label>
                </div>
            </Field>

            <Button type='submit'>Cotizar</Button>
        </form>
    )
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
}
