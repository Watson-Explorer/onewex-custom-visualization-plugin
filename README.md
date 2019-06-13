# onewex-custom-visualization-plugin

A bootstrap sample for developing an IBM Watson Explorer oneWEX Content Miner visualization plug-in. Clone this repository and write your visualization component.

## Setup

```bash
git clone http://github.com/Watson-Explorer/onewex-custom-visualization-plugin.git <your-plugin-name>
cd <your-plugin-name>
```

In `src/index.js` update your plug-in information: `version`, and `description`.
- `version` is in the format `0.0.1`
   - For details, see [npm-package.json](https://docs.npmjs.com/files/package.json).

```bash
npm install && (cd example && npm install && npm link)
```

## Usage

### Develop

1. Develop a React component for your facet visualization.
   - Sample components at `src/Hello*Component.js` are the starting point
   - Find `propTypes` in the sample components for the component props passed by Content Miner

1. Add the component to the plug-in descriptor.
   - Open `src/index.js` and add or remove elements for the `entries` array property of the `wexPlugin` variable

#### Tips
- As this project is based on TypeScript template from [Create React Library](https://www.npmjs.com/package/create-react-library), tips for it also works.
- You might get errors deploying a plugin that includes particular packages such as `d3`.
  - The current `rollup.config.js` has a workaround setting `strict: false` for `d3`.
  - Otherwise, search solution with `rollup.js` and update `rollup.config.js` so that it doesn't produce the error.

#### TypeScript
- This project is configured to work with JavaScript and TypeScript.
- See the `src/typescript` directory for samples in TypeScript and type definition file `ibmwexminer.d.ts`.
- To build the sample entry point `index.tsx` from the `typescript` directory, in the `rollup.config.js` file, switch which `input` property is commented out.

#### C3.js
- Samples in `src/c3` provide visualization using [C3.js](https://c3js.org/).
  - Uncomment C3 related definitions in `src/index.js` to enable them.
- This project is configured to use [react-c3js](https://www.npmjs.com/package/react-c3js).

### Build and Deploy

To run this sample plug-in, issue the following command from the `onewex-custom-visualization-plugin` directory:

```bash
npm start
```

The plug-in module specified in the `package.json` file is built and updated in watch mode.

Sample output:

> ```
> rollup v0.62.0
> bundles src/index.js → dist\onewex-custom-visualization-plugin.js...
> created dist\onewex-custom-visualization-plugin.js in 3.8s
> ```

The module `dist\onewex-custom-visualization-plugin.js` can be uploaded as a visualization plug-in in oneWEX Content Miner.

The previous process remains running on the console so that updates to the plug-in source files are immediately included in plug-in file. You need to open another console to run the next step, or kill the process by entering **control+C**.

#### Test with Storybook

You can check the visualizations by using [Storybook](https://storybook.js.org/). Storybook reads the plug-in entry point and shows pages for each facet visualization.

Enter the following commands:

```bash
cd example
npm run storybook
```

You can change the sample facet data in the **Knobs** tab in a slower screen. You can also customize the sample data by modifying `example/src/stories/index.js`. The file has a definition of variable `dataOptions` that is a map from a data name to facet data.

#### Optimized build

When you finish developing your plug-in, it's recommended to build the plugin in production mode to get optimized.

```bash
cd ..    # move to <your-plugin-name> directory
npm run build:dist
```

## License

Apache 2.0
