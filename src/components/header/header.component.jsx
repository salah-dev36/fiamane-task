import React from 'react'
import  { ReactComponent as Logo} from '../../assets/fi-amane-svg.svg'

const Header = () => {
  return (
    <div className="bg-gray-500 shadow-lg flex items-center justify-center h-12">
        <Logo />
    </div>
  )
}

export default Header