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
import React from 'react'
import styles from './styles.css'

class HelloComponent extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Hello WEX Plug-in</h1>
      </div>
    )
  }
}

HelloComponent.propTypes = {
  /**
   * Facet data to display
   *
   * Array of {
   *  id: string,
   *  label: string,
   *  count: number,
   *  correlation: number
   * }
   */
  // data: PropTypes.arrayOf(PropTypes.any)

  /**
   * Selected facets
   *
   * Array of selected facet IDs
   */
  // selectedItemIds: PropTypes.arrayOf(PropTypes.string),

  /**
   * Callback on changing facet selection
   *
   * onItemSelectionChanged(selectedFacetIds): void
   * where `selectedFacetIds` is an array of facet IDs
   */
  // onItemSelectionChanged: PropTypes.func,

  /**
   * Callback to save additional states on this view.
   *
   * The saved values will be present in `props` of this component.
   * As the frameworks uses some keys, the additional property
   * names SHOULD start with `plugin` prefix.
   */
  // onSavePropertyChanged: PropTypes.func,
}

HelloComponent.defaultProps = {
}

export default HelloComponent
