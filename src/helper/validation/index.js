import { Map } from 'immutable'

const isEmpty = value => value === undefined || value === null || value === ''
const join = rules => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]

/* eslint-disable max-len */
export function email(value) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!isEmpty(value) && !regex.test(value)) {
        return 'Valid email address required.'
    }
}

/* eslint-enable max-len */

export function emails(value) {
    if (!value) {
        return
    }

    const arr = value.split(/,| /)

    let error = false

    arr.forEach((item) => {
        item = item.trim()

        if (!item) {
            return
        }

        if (email(item)) {
            error = true
        }
    })

    if (error) {
        return 'Valid email addresses required, use comma or space as separator'
    }
}

export function required(value) {
    if (isEmpty(value)) {
        return 'Required'
    }
}

export function streetAddress(value) {
    if (`${value}`.includes('@')) {
        return 'Must be a valid street address'
    }
}

export function minLength(min) {
    return (value) => {
        if (!isEmpty(value) && value.length < min) {
            return `Must be at least ${min} characters`
        }
    }
}

export function maxLength(max) {
    return (value) => {
        if (!isEmpty(value) && value.length > max) {
            return `Must be no more than ${max} characters`
        }
    }
}

export function integer(value) {
    if (!Number.isInteger(Number(value))) {
        return 'Must be a number'
    }
}

export function oneOf(enumeration) {
    return (value) => {
        if (!~enumeration.indexOf(value)) {
            return `Must be one of: ${enumeration.join(', ')}`
        }
    }
}

export function expDate(value) {
    if (!/^(0[1-9]|1[0-2])\/(1[6-9]|[2-9][0-9])$/g.test(value)) {
        return 'Must be a valid date'
    }
}

export function birthday(value) {
    if (!value || !value.replace(/[\/_]/g, '')) {
        return false
    }

    const minDate = new Date('01/01/1930')
    const maxDate = new Date()
    const date = new Date(value)

    if ((date < minDate) ||
        (date > maxDate) ||
        (!Date.parse(value))) {
        return 'Must be a valid date'
    }
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return 'Do not match'
            }
        }
    }
}

/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * https://gist.github.com/thensg/07bd82f73a1f784a35f0
 */
export const cardNumber = (digits => (cardNum) => {
    if (!cardNum) {
        return
    }

    cardNum = cardNum.replace(/\s+/g, '')

    let sum = 0
    let digit = 0
    let even = true
    let i = cardNum.length

    while (i--) {
        digit = Number(cardNum[i])
        sum += (even = !even) ? digits[digit] : digit
    }

    if (!(sum > 0 && sum % 10 === 0)) {
        return 'Must be a valid card number'
    }
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])

export const cardCVV = (value) => {
    if (!/^[0-9]{3,4}$/.test(value)) {
        return 'Invalid CVV/CVC'
    }
}


export function createValidator(rules) {
    return (data = {}) => {
        const errors = {}
        Object.keys(rules).forEach(
            (key) => {
                const rule = join([].concat(rules[key]))
                // concat enables both functions and arrays of functions
                const error = rule(Map.isMap(data) ? data.get(key) : data[key], data)
                if (error) {
                    errors[key] = error
                }
            },
        )

        return errors
    }
}
