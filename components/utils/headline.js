import React, { useRef, useEffect, useState } from 'react'

import useElementParameters from '@/hooks/useElementParameters'

const Headline = ({ isVisible, page, firstLine, upperLineName, headlineSpan, lowerLineName, subtitle }) => {
  const sectionHeadline = useRef(null)
  const underlinedWord = useRef(null)
  const toUnderlineWord = useRef(null)

  const sectionHeading = useElementParameters(toUnderlineWord, underlinedWord, sectionHeadline)

  return <div className="section_heading">
    <h3>{subtitle}</h3>
    {
      firstLine
        ? <h1 ref={sectionHeadline}><span ref={toUnderlineWord}>{upperLineName} </span><span ref={underlinedWord}>{headlineSpan}</span><br/>{lowerLineName}</h1>
        : <h1 ref={sectionHeadline}>{upperLineName}<br/><span ref={toUnderlineWord}>{lowerLineName} </span><span ref={underlinedWord}>{headlineSpan}</span>.</h1>
    }
    <style jsx>
      {`
        .section_heading {
          padding: ${isVisible ? page ? '5vw 0 0 10vw' : '10vw 0 0 10vw' : page ? '5vw 0 0 10vw' : '10vw 0 0 0'};
          transition: .7s ease-out;
        }

        .section_heading {
          margin: ${isVisible ? '0' : '0 0 0 -50px'}
          transition: 1s ease-out;
        }

        .section_heading h1 span:after {
          width: ${sectionHeading.wordWidth}px;
          left: ${sectionHeading.widthTo}px;
          top: ${firstLine ? sectionHeading.height / 2 : sectionHeading.height}px;
        }
      `}
    </style>
  </div>
}

export default Headline
