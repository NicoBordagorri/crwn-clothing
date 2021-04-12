import React from 'react';
import {Switch,Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Switch>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      <Route path={`${match.path}`} component={CollectionsOverview} />
    </Switch>
  </div>
);

export default ShopPage;