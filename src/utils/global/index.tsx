import React from 'react';
import { View } from "react-native";

/**
 * Return APi configured header with bearer token for APi calls
 * @param token
 * @param type
 */
export const apiHeaderConfiguration = (token: any, type: any) => {
    let header;
    switch (type) {
        case "token":

            header = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                }
            }
            return header

        case "multipart":
            header = {
                headers: {
                    'x-access-token': token,
                    // 'Content-Type': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            }
            return header

        default:
            header = { headers: { 'Content-Type': 'application/json' } }
            return header
    }
}


/**
 * Return Object After Parsing
 *  @param data
 */

export const ParseTheData = (data: any) => {
    return JSON.parse(data);
}

/**
 * Return Vertical Space of 10 Px
 */
export const VerticalSpacer = () => {
    return (<View style={{ height: 10 }}></View>)
}
export const HorizontalSpacer = () => {
    return (<View style={{ width: 10 }}></View>)
}

/**
 * Return True if email enter is correct
 * @param count
 */
export const moneyFormat = (count: any) => {
    return Math.abs(Number(count)) >= 1.0e+9
        ? Math.abs(Number(count)) / 1.0e+9 + "B"
        : Math.abs(Number(count)) >= 1.0e+6
            ? Math.abs(Number(count)) / 1.0e+6 + "M"
            : Math.abs(Number(count)) >= 1.0e+3
                ? Math.abs(Number(count)) / 1.0e+3 + "K"
                : Math.abs(Number(count));
}

/**
 * Return True if email enter is correct
 * @param email
 */
export const isEmailValid = (email: any) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

/**
 * Return True if name enter is correct
 * @param name
 */
export const isNameValid = (name: any) => {
    return /^[A-Za-z\.\s]{3,25}$/.test(name)
}
/**
 * Return True if password has one capital one lower one number and one special and length must greater or equal to 8
 * @param password
 */
export const isPasswordValid = (password: any) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})/.test(password)
}

/**
 * Return True if email enter is correct
 * @param phone
 */
export const isPhoneValid = (phone: any) => {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone)
}

/**
 * Return True if email enter is correct
 * @param errorResponse
 */
export const logError = (errorResponse: any) => {
    console.log(errorResponse)
}
