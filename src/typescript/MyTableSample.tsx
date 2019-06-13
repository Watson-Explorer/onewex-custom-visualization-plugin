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

import styles from './styles.css'

/**
 * A visualization component which
 */
const MyTableSample: React.FunctionComponent<ibmwexminer.VisualizationProps<{}>> = ({ data }) => {
  return (
    <div className={styles.root}>
      <h3>My Table Sample</h3>
      <div className={styles.small}>
        <p><strong>Value, Count, Correlation</strong></p>
        {data.map(item =>
          <p key={`${item.id}`}>
            {`${item.label},${item.count},${item.correlation}`}
          </p>
        )}
      </div>
    </div>
  );
}
export default MyTableSample;
