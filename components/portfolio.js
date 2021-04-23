import React, { useRef } from 'react'

import useElementInViewport from '@/hooks/useElementInViewport'
import usePortfolio from '@/hooks/usePortfolio'

import Headline from '@/components/utils/headline'

const Portfolio = ({ portfolioPage, isLanguageEnglish }) => {
  const { portfolio, loading } = usePortfolio()

  const portfolioSection = useRef(null)
  const isVisible = useElementInViewport(portfolioSection)

  const setClassName = (index) => {
    if ((index + 1) % 3 === 0) return 'portfolio portfolio_three'
    if ((index + 1) % 3 === 2) return 'portfolio portfolio_two'
    if ((index + 1) % 3 === 1) return 'portfolio portfolio_one'
  }

  return <div className="portfolio_container" id="portfolio" ref={portfolioSection}>
    <Headline
      isVisible={isVisible}
      page={portfolioPage}
      subtitle={isLanguageEnglish ? 'our portfolio' : 'portfoolio'}
      upperLineName={isLanguageEnglish ? 'Happy clients.' : 'Õnnelikud kliendid.'}
      headlineSpan={isLanguageEnglish ? 'designs' : 'disainid'}
      lowerLineName={isLanguageEnglish ? 'Beautiful' : 'Suurepärased'}
    />
    <div className="portfolios">
      {
        portfolio && portfolio.map((el, i) => {
          return <a key={el._id} className={setClassName(i)} style={{ backgroundImage: `url(${el.image})` }} href={el.url} target="noreferrer" rel="_blank">
            <div className="portfolio_overlay"/>
            <h2>{el.name}</h2>
            <p className={i % 2 ? 'portfolio_arrow_right' : ''}>{isLanguageEnglish ? 'Deep dive' : 'Vaata lähemalt'} <i className="fas fa-arrow-right"/></p>
          </a>
        })
      }
    </div>
  </div>
}

export default Portfolio
