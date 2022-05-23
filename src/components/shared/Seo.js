import React from "react";
import Helmet from 'react-helmet'

function SEO({ title }) {
  const titleText = title ? `${title} ⋅ Instagram` : "Instagram"
  return (
    <Helmet>
      <title>Title</title>
    </Helmet>
  )
}

export default SEO;
