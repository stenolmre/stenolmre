import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { usePortfolioState, usePortfolioDispatch } from '@/context/portfolio'
import { getPortfolio } from '@/actions/portfolio'

import Loader from '@/utils/loader'

const Sections = () => {
  const { portfolio, loading } = usePortfolioState()
  const dispatchPortfolio = usePortfolioDispatch()

  useEffect(() => { getPortfolio(dispatchPortfolio) }, [dispatchPortfolio])

  return <Fragment>
    {
      loading ? <div className="loader"><Loader /></div> : portfolio && portfolio.map((el, i) =>   <Section
        key={i}
        odd={(i + 1) % 2 == 0 ? true : false}
        href={el.url}
        image={el.image}
        name={el.name}
        excerpt={el.excerpt}
        tech={el.tech}
        images={<Fragment>
          {el.images.map(img => <img key={img} src={img} alt={img}/>)}
        </Fragment>}/>)
    }
  </Fragment>
}

const Section = ({ id, odd, href, image, name, excerpt, tech, images }) => {
  return <div className={odd ? 'section_odd section' : 'section_even section'} id={id ? 'portfolio' : ''}>
    <Link href={href}><a className={odd ? 'section_main section_main_odd' : 'section_main'} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="illustration" />
      <div className="section_content">
        <h2>{name}</h2>
        <p>{excerpt}</p>
        <h4>Tehnoloogiad</h4>
        <p>{tech}</p>
      </div>
    </a></Link>
    <div className="section_icons">
      {images}
    </div>
    <a className="section_call_to_action" href="/#contact">Võta ühendust</a>
  </div>
}

export default Sections
