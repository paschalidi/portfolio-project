/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Privacy from './Privacy';

const title = 'Terms and Conditions';

export default {

  path: '/terms',

  action() {
    return {
      title,
      component: <Layout><Privacy title={title} /></Layout>,
    };
  },

};
