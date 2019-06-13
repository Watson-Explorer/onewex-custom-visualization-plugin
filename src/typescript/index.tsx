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
import MyTableSample from './MyTableSample';

//
// Entry point
//
export const wexPlugin: ibmwexminer.PluginDescriptor = {
 // The plug-in version. Specify `1.0.0`
  wexPluginVersion: '1.0.0',

  // The plugin info
  name: 'onewex-custom-visualization-plugin-ts',
  version: '0.0.1',
  description: 'oneWEX Visualization Plug-in in TypeScript',

  // Extension entries
  entries: [
    //
    // A custom facet visualization - displays facets as an CSV
    //
    {
      type: 'facet-visualization',
      id: 'my-custom-vis',
      label: 'My Table Sample',

      // The React component
      component: MyTableSample,
    },
  ]
};
