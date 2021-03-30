import React, { useRef, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { usePortfolioState, usePortfolioDispatch } from '@/context/portfolio'
import { getPortfolio } from '@/actions/portfolio'

import Headline from '@/utils/headline'

const Portfolio = ({ portfolioPage }) => {
  const user_lang = Cookies.get('lang') === 'ENG'

  const { portfolio, loading } = usePortfolioState()
  const dispatchPortfolio = usePortfolioDispatch()

  useEffect(() => { getPortfolio(dispatchPortfolio) }, [dispatchPortfolio])

  const portfolioSection = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isElementOutViewport = () => {
      const rect = portfolioSection.current && portfolioSection.current.getBoundingClientRect()

      if (!isVisible && rect && rect.top < window.innerHeight) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', isElementOutViewport)
    return () => window.removeEventListener('scroll', isElementOutViewport, true)
  }, [portfolioSection.current, isVisible])

  return <div className="portfolio_container" id="portfolio" ref={portfolioSection}>
    <Headline language={user_lang} isVisible={isVisible} contactPage={portfolioPage} subtitle={user_lang ? 'our portfolio' : 'portfoolio'} upperLineName={user_lang ? 'Happy clients.' : 'Õnnelikud kliendid.'} headlineSpan={user_lang ? 'designs' : 'disainid'} lowerLineName={user_lang ? 'Beautiful' : 'Suurepärased'}/>
    <div className="portfolios">
      {
        portfolio && portfolio.map((el, i) => <a key={el._id} className={i === 0 ? 'portfolio portfolio_one' : i === 1 ? 'portfolio portfolio_two' : 'portfolio portfolio_three'} style={{ backgroundImage: `url(${el.image})` }} href={el.url} target="noreferrer" rel="_blank">
          <div className="portfolio_overlay"/>
          <h2>{el.name}</h2>
          <p className={i % 2 ? 'portfolio_arrow_right' : ''}>{user_lang ? 'Deep dive' : 'Vaata lähemalt'} <i className="fas fa-arrow-right"/></p>
        </a>)
      }
    </div>
  </div>
}

export default Portfolio
