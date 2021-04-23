import React, { Fragment, useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import usePortfolio from '@/hooks/usePortfolio'

import Layout from '@/components/layout/layout'
import Loader from '@/components/utils/loader'

const HeroSection = ({ isLanguageEnglish }) => {
  const { portfolio, loading } = usePortfolio()

  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => { !loading && setTimeout(() => { setStartAnimation(true) }, 50) }, [loading])

  const heroDiv = useRef(null)

  const scrollDown = () => window.scroll({ top: heroDiv.current ? heroDiv.current.offsetHeight + 80 : 1, left: 0, behavior: 'smooth' })

  return <Layout startAnimation={startAnimation}>
    {
      loading ? <div className="main_loader"><Loader color="var(--white)"/></div> : <div className="hero_container" ref={heroDiv}>
        <div className="hero">
          {
            isLanguageEnglish
              ? <h1>Reach more customers<br/>with beautiful website.</h1>
              : <h1>Ilus veebileht<br/>toob rohkem kliente.</h1>
          }
          <div className="hero_links">
            <Link href="/#portfolio"><a className="hero_links_button">{isLanguageEnglish ? 'Check out our work' : 'Vaata meie veebilehti'}</a></Link>
            {
              portfolio && portfolio.map(el => <a href={el.url} key={el._id}>{el.url.slice(8)}</a>).slice(0, 3)
            }
          </div>
          <div className="hero_arrow" onClick={scrollDown}>
            <i className="fas fa-arrow-down"/>
          </div>
        </div>
      </div>
    }
    <style jsx>{`
      .hero h1 {
        margin: ${startAnimation ? '12vw 0 50px 10vw' : 'calc(12vw + 100px) 0 50px 10vw'};
        opacity: ${startAnimation ? '1' : '0'};
      }

      .hero_links {
        opacity: ${startAnimation ? '1' : '0'};
      }

      .hero_arrow {
        bottom: ${startAnimation ? '2vw' : '-5vw'};
      }
    `}</style>
  </Layout>
}

export default HeroSection
