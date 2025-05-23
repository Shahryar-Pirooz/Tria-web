import { useState, useEffect, createElement } from 'react'
import Toast from './toast'
import { stars } from '../assets'
import passwordGenerator from '../PassGen.js'

export default function InputSide() {
    const [nameState, setNameState] = useState('')
    const [codeState, setCodeState] = useState('')
    const [domainState, setDomainState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [toastState, setToastState] = useState(false)
    useEffect(() => {
        if (toastState) {
            setTimeout(() => setToastState(false), 3000)
        }
    }, [toastState])
    return (
        <div className="passgen" id="genpass">
            <div className="input-side">
                <img className="stars" src={stars} alt="" aria-hidden />
                <div className="inputs">
                    <div className="input-group">
                        <label className="label" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Give me a name (e.g. Michael)"
                            value={nameState}
                            onChange={(e) => setNameState(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="code">
                            Code:
                        </label>
                        <input
                            className="input"
                            type="password"
                            name="code"
                            id="code"
                            placeholder="Give me a simple code (e.g. 1234)"
                            value={codeState}
                            onChange={(e) => setCodeState(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="domain">
                            Domain:
                        </label>
                        <input
                            className="input"
                            type="text"
                            name="domain"
                            id="domain"
                            placeholder="Give me a domain (e.g. facebook.com)"
                            value={domainState}
                            onChange={(e) => setDomainState(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn-blue"
                        onClick={() => {
                            setPasswordState(
                                passwordGenerator(
                                    nameState,
                                    codeState,
                                    domainState
                                )
                            )
                            setToastState(true)
                        }}
                    >
                        {passwordState === '' ? `Generate` : passwordState}
                    </button>
                </div>
            </div>
            <div className="help-side">
                <p>Using tria is simple, all you need to do is to give tria</p>
                <ul className="help-text">
                    <li>
                        A name, which can be any name you like (e.g. Michael)
                    </li>
                    <li>A simple code that's easy to remember (e.g. 1234)</li>
                    <li>
                        A domain of the website you want the password for (e.g.
                        facebook.com)
                    </li>
                </ul>
                <p>
                    You don’t need to remember or take note of the password
                    because you can always come back, input the name,code and
                    domain and tria will give you the same exact password that
                    you had generated!
                </p>
                <p className="goodlock">Good Lock!</p>
            </div>
            {toastState ? (
                <Toast style={{ width: window.innerWidth, opacity: 1 }} />
            ) : (
                <Toast style={{ width: '0px', opacity: 0 }} />
            )}
        </div>
    )
}
