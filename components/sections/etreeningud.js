import React, { Fragment } from 'react'
import Link from 'next/link'

import Section from './section'

const Etreeningud = () => {
  return <Section
    id
    href="https://etreeningud.ee"
    image="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    name="eTreeningud"
    excerpt="Tasuta treeningkavad koos õpetuste ja videotega iseseisvaks treenimiseks."
    tech="Etreeningute veebileht on ehitatud reactjs'iga, kus API kutsung on tehtud serveri vabale nextjs raamile. Nextjs hoolitseb ka samuti domeeni eest, mille abil on veebileht kenasti nähtav. Andmete haldamiseks on kasutatud MongoDB süsteemi ning CSS3 hoolitseb väljanägemise eest."
    images={
      <Fragment>
        <img src="Nextjs-logo.png" alt="nextjs"/>
        <img src="react-js.png" alt="reactjs"/>
        <img src="MongoDB-Logo.png" alt="mongodb"/>
      </Fragment>
    }/>
}

export default Etreeningud
