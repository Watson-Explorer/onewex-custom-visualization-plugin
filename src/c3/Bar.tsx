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
 * A visualization component c3 Bar chart w/ option
 */
export type Props = ibmwexminer.VisualizationProps<{ pluginCorrelation?: boolean }>;
class Bar extends React.PureComponent<Props> {

  selectChartProps = createSelector(
    (props: Props) => props.data,
    (props: Props) => props.pluginCorrelation,
    (orgData: ibmwexminer.MinerFacetValue[], pluginCorrelation: any) => {
      const data = orgData.slice(0, 10);
      const columns = pluginCorrelation ?
          [['correlation' as any, ...data.map((d: any) => d.correlation)]] :
          [['count' as any, ...data.map((d: any) => d.count)]];

      return {
        data: {
          columns,
          type: 'bar',
          tooltip: { format: { title: (d: any) => data[d].label }}
        },
        bar: { width: { ratio: 0.8 }},
        padding: { top: 40, right: 100, bottom: 40, left: 100 }
      }; 
    }
  );

  render() {
    const { onSavePropertyChanged } = this.props;
    return (
      <div className={styles.root}>
        <C3Chart {...this.selectChartProps(this.props)} />
        <input
          id="correlationCheck" 
          type='checkbox'
          onChange={e => onSavePropertyChanged && onSavePropertyChanged({pluginCorrelation: e.target.checked})} />
        <label htmlFor="correlationCheck">Correlation</label>
      </div>
    );
  }
}
export default Bar;
