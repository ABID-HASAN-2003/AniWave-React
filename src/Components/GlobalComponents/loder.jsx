import React from 'react'
import DecryptedText from './LoderComponent/DecryptedText';
const loder = () => {
  return (
    <div className='container mx-auto justify-center flex text-5xl font-bold text-red-700'>
        <div
            style={{ marginTop: '4rem' }}
            >
            <DecryptedText

              text="loading....."

              animateOn="view"

              revealDirection="center"
            />
        </div>
    </div>
  )
}

export default loder
