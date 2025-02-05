import './Input.css'

const Input = ({ children, type = 'text' }) => {
    return (
        <div className='input-container'>
            <label className='input-label'>{children}</label>
            <div className='input-wrapper'>
                <input className='input'type={type} placeholder={children} />
            </div>
        </div>
    )
}

export default Input;