# mini-genome-browser

> tool by regulonDB CCG-UNAM 

[![NPM](https://img.shields.io/npm/v/mini-genome-browser.svg)](https://www.npmjs.com/package/mini-genome-browser) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mini-genome-browser
```

## Usage

# 1 You need a gene data.
the componente rec

The component receives by the prop "GeneData" an object with the information of the gene
example
```json
{"name": "insB-1", "id":"ECK120002705", "posL":"19811", "posR":"20314", "strand":"reverse", "color":"noCode"},
```

# 2 on component implementation 

```jsx
import React, { Component } from 'react'

import MyComponent from 'mini-genome-browser'

class Example extends Component {
  render () {
    return (
      <MyComponent GeneData={object}/>
    )
  }
}
```

## License

MIT © [galarcon CCG-UNAM](https://github.com/galarcon CCG-UNAM)
