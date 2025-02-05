import './Logo.css'

const Logo = ({dimension = "64 px"}) => {
    return(
        <svg 
        className='logo'
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 2 12 2C7.58172 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M9.5 3.5L12 8L9.5 11L12 14.5" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
            </svg>
    )
}

export default Logo;