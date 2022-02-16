import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
    background: #70becf;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const CotizationResult = styled.div`
    position: relative;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background: #7fe0ed;
    margin-top: 1rem;
`

const CotizationText = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

export default function Result({ cotization }) {
    return cotization === 0 ? (
        <Message>Elige marca, año y tipo de seguro</Message>
    ) : (
        <CotizationResult>
            <TransitionGroup component='span' className='result'>
                <CSSTransition
                    classNames='result'
                    key={cotization}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <CotizationText>
                        El total es: <span>${cotization}</span>
                    </CotizationText>
                </CSSTransition>
            </TransitionGroup>
        </CotizationResult>
    )
}

Result.propTypes = {
    cotization: PropTypes.number.isRequired,
}
