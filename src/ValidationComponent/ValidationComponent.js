import React from 'react'

const validateLength = (charCount) => {
  if (charCount < 5) {
    return 'Text too short'
  }

  return 'Text long enough'
}

const validation = (props) => {
  return <div>
    <p>{validateLength(props.size)}</p>
  </div>
}

export default validation