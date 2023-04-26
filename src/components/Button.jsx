import React from 'react'

const Button = ({title,styles,handleClick}) => {
  return (
    <div>
        <button className={styles} onClick={handleClick}>
            {title}
        </button>
    </div>
  )
}

export default Button