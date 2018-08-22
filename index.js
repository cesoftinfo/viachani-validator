import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';

class Viachani extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldText: '',
            fieldTextValidate: true,
            errorMsg: '',
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
        editable: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
    };
    validate = (text, type) => {
        num = /^\d+$/;
        alph = /^[a-zA-Z0-9]+$/;
        email = /\S+@\S+\.\S+/;
        dateformatdmy = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        {
            type.some((field, i) => {
                stateChangetrue = () => {
                    this.setState({
                        fieldTextValidate: true,
                        fieldText: text,
                        errorMsg: ''
                    });
                };
                stateChangefalse = () => {
                    this.setState({
                        fieldTextValidate: false,
                        fieldText: text,
                        errorMsg: 'please enter ' + field + ' field'
                    });
                    return true;
                };

                switch (field) {
                    case 'alphanumeric':
                        if (alph.test(text) || text.length === 0) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse();
                            return true;
                        }
                        break;
                    case 'required':
                        if (text.length > 0 && text != null) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse();
                            return true;
                        }
                        break;
                    case 'date/dmy':

                        if (dateformatdmy.test(text) || text.length === 0) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse();
                            return true;
                        }
                        break;
                    case 'email':
                        if (email.test(text) || text.length === 0) {
                            stateChangetrue();
                        }
                        else {
                            stateChangefalse();
                            return true;
                        }
                        break;
                    default:
                        if (field.maxLength) {
                            if (text.length > field.maxLength || !text.length === 0) {
                                this.setState({
                                    fieldTextValidate: false,
                                    fieldText: text,
                                    errorMsg: 'please enter max ' + field.maxLength + ' char'
                                })
                                return true;
                            } else {
                                this.setState({
                                    fieldTextValidate: true,
                                    fieldText: text,
                                    errorMsg: ''
                                })
                            }
                        } else if (field.minLength) {
                            if (text.length < field.minLength && text.length > 0) {
                                this.setState({
                                    fieldTextValidate: false,
                                    fieldText: text,
                                    errorMsg: 'please enter min ' + field.minLength + ' char'
                                })
                                return true;
                            } else {
                                this.setState({
                                    fieldTextValidate: true,
                                    fieldText: text,
                                    errorMsg: ''
                                })
                            }
                        }
                        break;
                }
            })
        }

    };
    render = () => {
        const {textfieldStyles, editable, rules, label, placeholder} = this.props;

        return (
            <View>
                <TouchableOpacity>
                    <Text style={styles.exp}>{label}</Text>
                </TouchableOpacity>
                <TextInput style={[styles.expText, textfieldStyles,
                    !this.state.fieldTextValidate ? styles.error : null]}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder={placeholder}
                           editable={editable}
                           value={this.state.fieldText}
                           placeholderTextColor="#BEBEBE"
                           onChangeText={(text) => this.validate(text, rules)}
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
        paddingVertical: 3
    },
    expText: {
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 5,
        paddingHorizontal: 6,
        width: 250,
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
        paddingVertical: 3,
        height: 30,
    },
    error: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#FDEDEC'
    },
    errorMsg: {
        color: 'red',
        fontSize: 12,
    }

});
export default Viachani;