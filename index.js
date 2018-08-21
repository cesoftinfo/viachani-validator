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
        editable: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
    };
    validate = (text,type) => {
        num = /^\d+$/;
        alph = /^[a-zA-Z0-9]+$/;
        email = /\S+@\S+\.\S+/;
        dateformatdmy = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        {type.some((field,i) => {
            action = (rule) => {
                if(rule.test(text))
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
            }
            switch(field){
                case 'alphanumeric':
                    action(alph);
                    break;
                case 'datedmy':
                    action(dateformatdmy);
                    break;
                case 'email':
                    action(email);
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
        const { textfieldStyles, editable, rules, label, placeholder } = this.props;

        return (
            <View style={styles.inl}>
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
    inl: {
        flexDirection:'row',
        paddingVertical: 3

    },
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
        backgroundColor:'rgba(255, 255,255,0.2)',
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