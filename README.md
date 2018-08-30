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
import {StyleSheet, Text, View} from 'react-native';
import Viachani from "viachani-validator";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            dob: '',
            errorMsg: {
                alphanumeric: 'must be alphanumeric value',
                numeric: 'must be numeric value',
                required: 'required field',
                minLength: 'required min characters',
                maxLength: 'must be max characters',
                email: 'invalid email format',
                datedmy: 'invalid dd.mm.yyyy format'
            }

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Viachani label={'Name:'}
                          placeholder={'name'}
                          value={this.state.name}
                          myOnChageText={text => {
                              this.setState({name: text})
                          }}
                          textfieldStyles={styles.text}
                          rules={['alphanumeric', {maxLength: 10}, 'required']}
                          error={this.state.errorMsg}
                />
                <Viachani label={'Surname:'}
                          editable={false}
                          placeholder={'surname'}
                          value={this.state.surname}
                          myOnChageText={text => {
                              this.setState({surname: text})
                          }}
                          textfieldStyles={styles.text}
                          rules={['alphanumeric', {maxLength: 10}, {minLength: 3}, 'required']}
                          error={this.state.errorMsg}
                />
                <Viachani label={'DOB:'}
                          placeholder={'dd.mm.yyyy'}
                          value={this.state.dob}
                          myOnChageText={text => {
                              this.setState({dob: text})
                          }}
                          numKeyboard={true}
                          textfieldStyles={styles.text}
                          rules={['datedmy', {maxLength: 10}, 'required']}
                          error={this.state.errorMsg}
                />
                <Viachani label={'Email:'}
                          placeholder={'sample@mail.com'}
                          value={this.state.email}
                          myOnChageText={text => {
                              this.setState({email: text})
                          }}
                          textfieldStyles={styles.text}
                          rules={[{maxLength: 20}, 'email']}
                          error={this.state.errorMsg}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    exp: {
        width: 90,
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        marginRight: 10,
        height: 30,
        paddingVertical: 3
    },
    text: {
        backgroundColor: '#E5E7E9'
    }
});

```
![alt text](https://s8.postimg.cc/yhnicb2np/rsz_screenshot_20180830-111145.png)

## Supported Validation Rules

* Alphanumeric
* Numeric
* minLength
* maxLength
* Date
* Empty string


## Validators

| Rule        | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| datedmy     | check if the string is a  date format. It accepts dd.mm.yyy  dd-mm-yyy and dd/mm/yyyy format. |
| alphaumeric | check if the string is an alphanumeric value.                                                 |
| email       | check if the string is an email.                                                              |
| numeric     | check if the string is an numeric value.                                                      |
| minLength   | check if string is at least x characters long.                                                |
| maxLength   | check if string contains maximum x characters.                                                |                                                     |
| required    | check if string is empty.                                                                     |


## Props

| Name            | Type    | Default | Required | Description                |
|-----------------|---------|---------|----------|----------------------------|
| label           | string  | null    | yes      | set component label.       |
| placeholder     | string  | null    | no       | set placeholder text.      |
| editable        | boolean | yes     | no       | make component editable.   |
| value           | string  | null    | yes      | set component value.       |
| numKeyboard     | boolean | false   | no       | set numeric keyboard.      |
| myOnChageText   | func    |         | yes      | set state value on change. |
| textfieldStyles | array   | null    | no       | custom text filed styling. |
| rules           | array   | null    | no       | set validation rules.      |
| error           | array   |         | yes      | set custom error message.  |

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

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/viachani-validator
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics