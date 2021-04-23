import React, { useState, useEffect, useRef } from 'react'

import isElementInViewport from '@/utils/isElementInViewport'

const useElementInViewport = element => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => isElementInViewport(element.current, isVisible,  setIsVisible))

    return () => window.removeEventListener('scroll', isElementInViewport, true)
  }, [isVisible])

  return isVisible
}

export default useElementInViewport
