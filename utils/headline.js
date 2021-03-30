import React, { useRef, useEffect, useState } from 'react'

const Headline = ({ language, isVisible, contactPage, firstLine, upperLineName, headlineSpan, lowerLineName, subtitle }) => {
  const [sectionHeading, setSectionHeading] = useState({ widthTo: '', wordWidth: '', height: '' })

  const sectionHeadline = useRef(null)
  const underlinedWord = useRef(null)
  const toUnderlineWord = useRef(null)

  useEffect(() => {
    setSectionHeading({ widthTo: toUnderlineWord.current ? toUnderlineWord.current.offsetWidth : 1, wordWidth: underlinedWord.current ? underlinedWord.current.offsetWidth : 1, height: sectionHeadline.current ? sectionHeadline.current.offsetHeight : 1 })

    const getParameters = () => {
      setSectionHeading({ widthTo: toUnderlineWord.current ? toUnderlineWord.current.offsetWidth : 1, wordWidth: underlinedWord.current ? underlinedWord.current.offsetWidth : 1, height: sectionHeadline.current ? sectionHeadline.current.offsetHeight : 1 })
    }

    window.addEventListener('resize', getParameters)
    return () => window.removeEventListener('resize', getParameters, true)
  }, [toUnderlineWord.current, underlinedWord.current, sectionHeadline.current])

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
          padding: ${isVisible ? contactPage ? '5vw 0 0 10vw' : '10vw 0 0 10vw' : contactPage ? '5vw 0 0 10vw' : '10vw 0 0 0'};
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

// {
//   language
//     ? <h1 ref={sectionHeadline}><span ref={toUnderlineWord}>We would </span><span ref={underlinedWord}>love</span><br/>to hear from you.</h1>
//     : <h1 ref={sectionHeadline}><span ref={toUnderlineWord}>Kuuleksime </span><span ref={underlinedWord}>Teist</span><br/>suurima rõõmuga.</h1>
// }

export default Headline
