
# Description

React native text input component with label and defined validation rules.


## Install

```bash
npm i -S viachani-validator
```

## Usage

```bash

import React from 'react';
import Viachani from 'viachani-validator';
 
class MyApp extends React.Component {
  render() {
    return (
     <Viachani label={'custom'} rules={['alphanumeric',{maxLength:5},{minLength:2}]} editableProp={true}/>
    );
  }
}

```
![alt text](https://github.com/cesoftinfo/viachani-validator/blob/master/vv.jpg)
## License

[MIT](http://vjpr.mit-license.org)


The MIT License


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

=======
# viachani-validator
React native text input with validaton
>>>>>>> 9899fec0c5752d1429d52f841aa2df5ff6f7f262
