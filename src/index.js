/*
 * Copyright 2019 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// import React from 'react'

// Hello Samples
import HelloComponent from './HelloComponent'
import HelloFacetsComponent from './HelloFacetsComponent'
import HelloFacetSelectionComponent from './HelloFacetSelectionComponent'
import HelloViewStateComponent from './HelloViewStateComponent'

// Advanced Samples
import MyTableSample from './typescript/MyTableSample'
import Bar from './c3/Bar'
import Pie from './c3/Pie'

/**
 * oneWEX plug-in entry point (plug-in descriptor)
 *
 * Entry point should be either of the followings:
 * - wexPlugin named exported object
 * - module's export object
 * - wexPlugin property in module default export object
 * - module default export object
 * All the above are examined in the order and the first object
 * which has `wexPluginVersion` property is considered as the
 * module descriptor.
 */
export const wexPlugin = {
  // The plug-in version. Specify `1.0.0`
  wexPluginVersion: '1.0.0',

  // The plugin info
  name: 'onewex-custom-visualization-plugin',
  version: '0.0.1',
  description: 'oneWEX Visualization Plug-in Sample',

  // Extension entries
  entries: [
    //
    // The first custom facet visualization - only displays "Hello WEX Plug-in"
    //
    {
      // Type of this entry. Only `facet-visualization` is supported.
      type: 'facet-visualization',
      id: 'hello-wex-plugin',
      label: 'Hello WEX',

      // The React component
      component: HelloComponent
    },

    //
    // More samples
    //
    {
      type: 'facet-visualization',
      id: 'hello-facets',
      label: 'Hello Facets',
      component: HelloFacetsComponent
    },
    {
      type: 'facet-visualization',
      id: 'hello-facet-selection',
      label: 'Hello Facet Selection',
      component: HelloFacetSelectionComponent
    },
    {
      type: 'facet-visualization',
      id: 'hello-view-state',
      label: 'Hello View State',
      component: HelloViewStateComponent
    },

    //
    // Advanced Samples
    //
    {
      type: 'facet-visualization',
      id: 'csv-table-ts',
      label: 'CSV Table by TypeScript',
      component: MyTableSample
    },
    {
      type: 'facet-visualization',
      id: 'c3-bar',
      label: 'Bar chart',
      component: Bar
    },
    {
      type: 'facet-visualization',
      id: 'c3-pie',
      label: 'Pie chart',
      component: Pie
    }
  ]
}
