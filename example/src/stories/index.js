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
import React from 'react';

import { storiesOf, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, object, array, text, boolean, number } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';

import { wexPlugin } from 'onewex-custom-visualization-plugin';

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS }});

function getData(count, getData = n => ({id: `data${n+1}`, label: `Data ${n+1}`, count: (n+1), correlation: 0.1 * (n+1)})) {
  const r = [];
  for (let i = 0; i < count; i ++) {
    r.push(getData(i));
  }
  return r;
}

const emptyData = getData(0);
const initialData = getData(5);
const dataOptions = {
  Empty: emptyData,
  Data5: initialData,
  Data15: getData(15, n => ({id: `data${n+1}`, label: `Data ${n+1}`, count: Math.floor(100 * Math.cos(n+1)), correlation: 10 * Math.sin(n+1)})),
  Data50: getData(50, n => ({id: `data${n+1}`, label: `Data ${n+1}`, count: Math.floor(Math.random() * (n+1)), correlation: 0.1 * Math.random() * (n+1)})),
}
const someSelection = ['data1'];
const nop = () => {};

class TestWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      savedProps: {}
    };

    this.onItemSelectionChanged = this.onItemSelectionChanged.bind(this);
    this.onSavePropertyChanged = this.onSavePropertyChanged.bind(this);
  }

  onItemSelectionChanged(...args) {
    if (this.props.onItemSelectionChanged) {
      this.props.onItemSelectionChanged.apply(null, args)
    }
    this.setState({
      savedProps: {
        ...this.state.savedProps,
        selectedItemIds: args[0]
      }
    })
  }

  onSavePropertyChanged(...args) {
    if (this.props.onSavePropertyChanged) {
      this.props.onSavePropertyChanged.apply(null, args)
    }
    this.setState({
      savedProps: {
        ...this.state.savedProps,
        ...args[0]
      }
    })
  }

  render() {
    const Compo = this.props.Compo;
    return <Compo
      data={this.props.data}
      {...this.state.savedProps}
      selectedItemIds={this.props.selectedItemIds || this.state.savedProps.selectedItemIds}
      onItemSelectionChanged={this.onItemSelectionChanged}
      onSavePropertyChanged={this.onSavePropertyChanged}
    />;
  }
}


for (const entry of wexPlugin.entries) {
  (() => {

    const savedProps = {};
    const saveProps = (...args) => {
      const props = args[0];
      if (props) {
        Object.assign(savedProps, props);
      }
      action('onSavePropertyChanged')(...args);
    }

    let s = storiesOf(`${entry.label}`, module);
    s.addDecorator(withKnobs);
    s.add('default', () => (
        <TestWrapper
          Compo={entry.component}
          data={select('Data', dataOptions, initialData)}
          onItemSelectionChanged={action('onItemSelectionChanged')}
          onSavePropertyChanged={saveProps}
          {...savedProps}
        />))
      .add('with selection', () => (
        <TestWrapper
          Compo={entry.component}
          data={select('Data', dataOptions, initialData)}
          selectedItemIds={array('Selection', someSelection)}
          onItemSelectionChanged={action('onItemSelectionChanged')}
          onSavePropertyChanged={saveProps}
          {...savedProps}
        />))
  })();
}
