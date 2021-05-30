import React from 'react'
import Head from 'next/head'

export default function MetaTags({ title, description, image, url }) {
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content={description ? description : 'Our mission is to empower every person and every organisation on the planet to achieve more. We strive to build beautiful websites and help owners to reach more customers through it. Our strategy is to build easy-to-use customer based sites with modern and eye-catching design.'}/>
    <meta name="image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
    <meta name="keywords" content="Software, Developer, Web, Website"/>
    <link rel="shortcut icon" type="image/x-icon" href="https://res.cloudinary.com/djz69vbsq/image/upload/v1622384887/stenolmre/stenolmre_logo_gye6rf.png" />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description ? description : 'Our mission is to empower every person and every organisation on the planet to achieve more. We strive to build beautiful websites and help owners to reach more customers through it. Our strategy is to build easy-to-use customer based sites with modern and eye-catching design.'}/>
    <meta property="og:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
    <meta property="og:url" content={url ? `https://stenolmre.com/${url}` : 'https://stenolmre.com'}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description ? description : 'Our mission is to empower every person and every organisation on the planet to achieve more. We strive to build beautiful websites and help owners to reach more customers through it. Our strategy is to build easy-to-use customer based sites with modern and eye-catching design.'}/>
    <meta name="twitter:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1615392398/stenolmre/image_hwkchn.jpg'}/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>
}
