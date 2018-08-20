import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';

class Viachani extends Component {
    constructor (props) {
        super(props);
        this.state = {
            fieldText: '',
            fieldTextValidate: true,
        }
    }

    static propTypes = {
        textfieldStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        placeholder: PropTypes.string,
        rules: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        viewStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        editable: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
    };
    validate = (text,type) => {
        num = /^\d+$/;
        alph = /^[a-zA-Z0-9]+$/;
        email = /\S+@\S+\.\S+/;

        {type.some((field,i) => {
            switch(field){
                case 'alphanumeric':

                    if(alph.test(text))
                    {
                        this.setState({
                            fieldTextValidate: true,
                            fieldText: text
                        })
                    }
                    else{
                        this.setState({
                            fieldTextValidate: false,
                            fieldText: text
                        })
                        return true;
                    }

                    break;
                case 'email':
                    if(email.test(text))
                    {
                        this.setState({
                            fieldTextValidate: true,
                            fieldText: text
                        })
                    }
                    else{
                        this.setState({
                            fieldTextValidate: false,
                            fieldText: text
                        })
                        return true;
                    }
                    break;
                default:
                    if(field.maxLength) {
                        if (text.length > field.maxLength) {
                            this.setState({
                                fieldTextValidate: false,
                                fieldText: text
                            })
                            return true;
                        } else {
                            this.setState({
                                fieldTextValidate: true,
                                fieldText: text
                            })
                        }
                    }else if(field.minLength) {
                        if (text.length < field.minLength) {
                            this.setState({
                                fieldTextValidate: false,
                                fieldText: text
                            })
                            return true;
                        } else {
                            this.setState({
                                fieldTextValidate: true,
                                fieldText: text
                            })
                        }
                    }
                    break;
            }
        })}

    }
    render = () => {
        const { textfieldStyles, textinputStyles, editable, viewStyles, rules, label, placeholder } = this.props;

        return (
            <View style={viewStyles}>
                <TouchableOpacity>
                    <Text style={textfieldStyles}>{label}</Text>
                </TouchableOpacity>
                <TextInput style={[styles.expText,
                    !this.state.fieldTextValidate ? styles.error : null]}
                           underlineColorAndroid='rgba(224,224,224,0.2)'
                           placeholder={placeholder}
                           editable={editable}
                           value={this.state.fieldText}
                           placeholderTextColor = "#BEBEBE"
                           onChangeText={(text)=> this.validate(text,rules)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    exp: {
        width:90,
        fontSize:16,
        fontWeight:'500',
        color:'black',
        marginRight: 10,
        height: 30,
        paddingVertical: 3
    },
    expText: {
        backgroundColor:'#E0E0E0',
        borderRadius: 5,
        paddingHorizontal: 6,
        width:200,
        fontSize:16,
        color:'black',
        paddingVertical: 3,
        height: 30,
    },
    error: {
        borderWidth: 2,
        borderColor: 'red'
    }

});
export default Viachani;