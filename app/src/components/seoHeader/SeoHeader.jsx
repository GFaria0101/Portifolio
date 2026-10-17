import {useLanguage} from '../../i18n.jsx';
import React from "react";
import { Helmet } from "react-helmet";

function SeoHeader() {
    const {t,locale,portfolio}=useLanguage();
    const {seo}=portfolio;
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
