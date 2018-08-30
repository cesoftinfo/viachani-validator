import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';

class Viachani extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldTextValidate: true,
            errorMsg: ' ',
        }
    }

    static propTypes = {
        textfieldStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        placeholder: PropTypes.string,
        rules: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        error: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        editable: PropTypes.bool,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        myOnChageText: PropTypes.func,
        numKeyboard: PropTypes.bool

    };
    validate = (text, type, err) => {
        num = /^\d+$/;
        alph = /^[A-Za-z\d\s]+$/;
        email = /\S+@\S+\.\S+/;
        dateformatdmy = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        {
            type.some((field, i) => {
                stateChangetrue = () => {
                    this.setState({
                        fieldTextValidate: true,
                        errorMsg: ' '
                    });
                };
                stateChangefalse = (errmg) => {
                    this.setState({
                        fieldTextValidate: false,
                        errorMsg: err[errmg]
                    });
                    return true;
                };

                switch (field) {
                    case 'alphanumeric':
                        if (alph.test(text) || text.length === 0) {
                            stateChangetrue();
                            return false;
                        }
                        else {
                            stateChangefalse('alphanumeric');
                            return true;
                        }
                        break;
                    case 'numeric':
                        if (num.test(text) || text.length === 0) {
                            stateChangetrue();
                            return false;
                        }
                        else {
                            stateChangefalse('numeric');
                            return true;
                        }
                        break;
                    case 'required':
                        if (text.length > 0 && text != null) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse('required');
                            return true;
                        }
                        break;
                    case 'datedmy':

                        if (dateformatdmy.test(text) || text.length === 0) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse('datedmy');
                            return true;
                        }
                        break;
                    case 'email':
                        if (email.test(text) || text.length === 0) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse('email');
                            return true;
                        }
                        break;
                    default:
                        if (field.maxLength) {
                            if (text.length > field.maxLength || !text.length === 0) {
                                this.setState({
                                    fieldTextValidate: false,
                                    errorMsg: err['maxLength'] + ' ' + field.maxLength
                                })
                                return true;
                            } else {
                                this.setState({
                                    fieldTextValidate: true,
                                    errorMsg: ' '
                                })
                            }
                        } else if (field.minLength) {
                            if (text.length < field.minLength && text.length > 0) {
                                this.setState({
                                    fieldTextValidate: false,
                                    fieldText: text,
                                    errorMsg: err['minLength'] + ' ' + field.minLength
                                })
                                return true;
                            } else {
                                this.setState({
                                    fieldTextValidate: true,
                                    fieldText: text,
                                    errorMsg: ' '
                                })
                            }
                        }
                        break;
                }
            })
        }

    };

    render = () => {
        const {textfieldStyles, editable, rules, label, placeholder, value, myOnChageText, error, numKeyboard} = this.props;

        return (
            <View>
                <TouchableOpacity>
                    <Text style={styles.exp}>{label}</Text>
                </TouchableOpacity>
                <TextInput style={[styles.expText, textfieldStyles,
                    !this.state.fieldTextValidate ? styles.error : null]}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           autoCorrect={false}
                           placeholder={placeholder}
                           editable={editable && true}
                           value={value}
                           keyboardType={numKeyboard ? 'numeric' : null}
                           placeholderTextColor="#BEBEBE"
                           onChangeText={(text) => {
                               (this.validate(text, rules, error));
                               myOnChageText(text)
                           }}
                />
                <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inl: {
        flexDirection: 'row',
        paddingVertical: 3

    },
    exp: {
        width: 90,
        fontSize: 14,
        color: 'black',
        marginRight: 10,
        height: 30,
    },
    expText: {
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 5,
        paddingHorizontal: 6,
        width: 300,
        fontSize: 16,
        color: 'black',
        paddingVertical: 3,
        borderWidth: 1,
        height: 30
    },
    error: {
        borderWidth: 1,
        borderColor: 'red',
    },
    errorMsg: {
        color: 'red',
        fontSize: 12,
    }

});
export default Viachani;