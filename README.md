[![validator_logo.png](https://s8.postimg.cc/ox8f9715x/validator_logo.png)](https://postimg.cc/image/uy6469ns1/)

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

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
     <Viachani label={'Name:'}
               editable={true}
               textfieldStyles={styles.exp}
               rules={['alphanumeric',{maxLength:5},{minLength:2}]}
               />
     <Viachani label={'Email:'}
               editable={true}
               textfieldStyles={styles.exp}
               rules={['email']}
              />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    exp: {
        width:90,
        fontSize:16,
        fontWeight:'500',
        color:'black',
        marginRight: 10,
        height: 30,
        paddingVertical: 3
    }
});
```
![alt text](https://s8.postimg.cc/7jec18ng5/image.jpg)

## Supported Validation Rules

* Alphanumeric
* Numeric
* minLength
* maxLength
* Date


## Validators

| Rule        | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| datedmy     | check if the string is a  date format. It accepts dd.mm.yyy  dd-mm-yyy and dd/mm/yyyy format. |
| alphaumeric | check if the string is an alphanumeric value.                                                 |
| email       | check if the string is an email.                                                              |
| numeric     | check if the string is an numeric value.                                                      |
| minLength   | check if string is at least x characters long.                                                |
| maxLength   | check if string contains maximum x characters.                                                |                                                     |




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

## Keywords

