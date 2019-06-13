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
declare namespace ibmwexminer {
  //-------------------------------------------------
  // Plug-in Descriptor
  //-------------------------------------------------

  export interface PluginExtensionEntry {
    /** id of this entry */
    id: string;
    /** label of this entry */
    label: string;
    /** description of this entry. optional */
    description?: string;

    /**
     * type of this entry
     * - `facet-visualization`
     */
    type: string; // 'facet-visualization'

    /**
     * The React component for this entry or its id in string.
     * - When `id` specified, `getComponent` in the descriptor will be called to get component
     */
    component?: React.ComponentType<any> | string;
  }

  export interface PluginDescriptor {
    /** plugin spec version. Must be `1.0.0` */
    wexPluginVersion: string;
    /** plugin name */
    name: string;
    /** plugin description. optional */
    description?: string;
    /** plugin version */
    version: string;

    /**
     * Plugin extension entries or a function to return them
     */
    entries: PluginExtensionEntry[] | (() => Promise<PluginExtensionEntry[]>);

    getComponent?(id: string, options?: any): React.ComponentType<any> | Promise<React.ComponentType<any>>;
    dispose?(): void | Promise<void>;
  }

  //-------------------------------------------------
  // Visualization Components
  //-------------------------------------------------

  /**
   * Visualization React Component Prop type
   */
  export interface VisualizationPropsBase<Additional> {
    /** List of facet values to be visualized */
    data: MinerFacetValue[];
    /** Selection */
    selectedItemIds: string[];

    onItemSelectionChanged?(selectedItemIds: string[]): void;
    onSavePropertyChanged?(properties: Additional): void;
  }
  export type VisualizationProps<Additional = {}> = VisualizationPropsBase<Additional> & Additional;

  /**
   * Facet value data provided by Content Miner
   */
  export interface MinerFacetValue {
    /** ID of this item (i.e. facet value) */
    id: string;
    /** Label of this item */
    label: string;
    /** The count */
    count: number;
    /** Correlation value for search versus all */
    correlation: number;
  }
}
