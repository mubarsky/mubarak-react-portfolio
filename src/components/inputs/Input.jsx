import React from 'react'

const Input = (type,placeholder,className,onChange,label) => {
  return (
    <>
      <input
        type="type"
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        label={label}
      />
    </>
  )
}

export default Input