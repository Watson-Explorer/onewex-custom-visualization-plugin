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
import * as React from 'react';
import { createSelector } from 'reselect';
import C3Chart from 'react-c3js';

import styles from './styles.css'

/**
 * A visualization component c3 Pie chart
 */
export type Props = ibmwexminer.VisualizationProps;
class Pie extends React.PureComponent<Props> {

  selectChartProps = createSelector(
    (props: Props) => props.data,
    (orgData: ibmwexminer.MinerFacetValue[]) => {
      const data = orgData.slice(0, 10);
      return ({
        data: {
          columns: data.map(d => ([d.label, d.count])),
          type: 'pie',
        },
        tooltip: { format: { value: (value: any, _: any, _x: any) => `${value}` }}
      });
    }
  );

  render() {
    return (
      <div className={styles.root}>
        <C3Chart {...this.selectChartProps(this.props)} />
      </div>
    );
  }
}
export default Pie;
