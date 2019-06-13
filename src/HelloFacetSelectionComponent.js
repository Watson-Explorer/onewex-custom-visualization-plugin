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
import PropTypes from 'prop-types'
import styles from './styles.css'

class HelloFacetSelectionComponent extends React.Component {
  onItemClick(itemId) {
    console.log('HelloFacetSelectionComponent - item clicked: ' + itemId)
    const { selectedItemIds = [], onItemSelectionChanged } = this.props

    const index = selectedItemIds.indexOf(itemId)
    const newIds = [...selectedItemIds]
    if (index === -1) {
      newIds.push(itemId)
    } else {
      newIds.splice(index, 1)
    }
    onItemSelectionChanged(newIds)
  }

  render() {
    const { data, selectedItemIds = [] } = this.props
    return (
      <div className={`${styles.root} ${styles.scroll}`}>
        <h1>Hello WEX Facet Selection</h1>
        <ul>
          {data.map(item => (
            <li
              key={item.id}
              className={selectedItemIds.includes(item.id) ? styles.selected : undefined}
            >
              <strong onClick={() => this.onItemClick(item.id)} style={{cursor: 'pointer'}}>{item.label}</strong> <span>{item.count}</span> <span>{item.correlation}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

HelloFacetSelectionComponent.propTypes = {
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
  data: PropTypes.arrayOf(PropTypes.any),

  /**
   * Selected facets
   *
   * Array of selected facet IDs
   */
  selectedItemIds: PropTypes.arrayOf(PropTypes.string),

  /**
   * Callback on changing facet selection
   *
   * onItemSelectionChanged(selectedFacetIds): void
   * where `selectedFacetIds` is an array of facet IDs
   */
  onItemSelectionChanged: PropTypes.func

  /**
   * Callback to save additional view states.
   *
   * The saved values will be present in `props` of this component.
   * As the frameworks uses some keys, the additional property
   * names SHOULD start with `plugin` prefix.
   */
  // onSavePropertyChanged: PropTypes.func,
}

HelloFacetSelectionComponent.defaultProps = {
}

export default HelloFacetSelectionComponent
