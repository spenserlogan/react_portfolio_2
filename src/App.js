import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './Views/ProductCategories';
import ProductHelp from './Views/ProductHelp';
import AppFooter from './Views/AppFooter';
import ProductHero from './Views/ProductHero';
// import ProductValues from './views/ProductValues';
// import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './Views/ProductCTA';
import AppAppBar from './Views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductCTA />
      <ProductHelp />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
