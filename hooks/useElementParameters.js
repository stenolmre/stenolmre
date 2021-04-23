import React, { useState, useEffect, useRef } from 'react'

const useElementParameters = (toUnderlineWord, underlinedWord, sectionHeadline) => {
  const [sectionHeading, setSectionHeading] = useState({ widthTo: '', wordWidth: '', height: '' })

  useEffect(() => {
    setSectionHeading({ widthTo: toUnderlineWord.current ? toUnderlineWord.current.offsetWidth : 1, wordWidth: underlinedWord.current ? underlinedWord.current.offsetWidth : 1, height: sectionHeadline.current ? sectionHeadline.current.offsetHeight : 1 })

    const getParameters = () => {
      setSectionHeading({ widthTo: toUnderlineWord.current ? toUnderlineWord.current.offsetWidth : 1, wordWidth: underlinedWord.current ? underlinedWord.current.offsetWidth : 1, height: sectionHeadline.current ? sectionHeadline.current.offsetHeight : 1 })
    }

    window.addEventListener('resize', getParameters)
    return () => window.removeEventListener('resize', getParameters, true)
  }, [toUnderlineWord.current, underlinedWord.current, sectionHeadline.current])

  return sectionHeading
}

export default useElementParameters
