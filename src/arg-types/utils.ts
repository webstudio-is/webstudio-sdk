import type {ArgTypes} from "@storybook/csf"
import {PropItem} from "react-docgen-typescript";

export type FilterPredicate = (prop: PropItem) => boolean

const validAttributes = (prop: PropItem) => {
    if (prop.parent) {
        // return ['ButtonHTMLAttributes', 'HTMLAttributes', 'AriaAttributes'].includes(prop.parent.name)
        return ['ButtonHTMLAttributes', 'HTMLAttributes', 'AriaAttributes'].includes(prop.parent.name)
    }
    return true
    // return prop.declarations?.some(decl => {
    //     return decl.name.includes('HTMLAttributes');
    // })
}

export const propsToArgTypes = (props: Record<string, PropItem>, filter?: FilterPredicate): ArgTypes => {
    console.log(props);
    const filterFn = filter ?? validAttributes
    const entries = Object.entries(props);
    entries.forEach(([_, prop]) => console.log(prop.parent?.name))
    return entries
        // .filter(validHTMLAttributes)
        // .filter(AriaAttributes)
        // .filter(onlyOwnProps)
        .reduce((result, current) => {
            const [propName, prop] = current

            // Filter out props
            if (!filterFn(prop)) {
                return result
            }

            const control = mapControlForType(prop)
            result[propName] = {...prop, ...control}
            return result
        }, {} as ArgTypes);
}

const matchers = {
    color: new RegExp('(background|color)', 'i'),
    date: /Date$/
}

export const mapControlForType = (propItem: PropItem): any => {
    const {type, name} = propItem;
    if (!type) {
        return undefined;
    }

    // args that end with background or color e.g. iconColor
    if (matchers.color && matchers.color.test(name)) {
        const controlType = propItem.type.name;

        console.log(11111);
        if (controlType === 'string') {
            return { control: { type: 'color' }, defaultValue: propItem.defaultValue?.value };
        }
    }

    // args that end with date e.g. purchaseDate
    if (matchers.date && matchers.date.test(name)) {
        return { control: { type: 'date' } };
    }

    switch (type?.name) {
        case 'array':
            return {control: {type: 'object'}};
        case 'boolean':
        case 'Booleanish':
            return {control: {type: 'boolean'}};
        case 'string':
            return {control: {type: 'text'}};
        case 'number':
            return {control: {type: 'number'}};
        case 'enum': {
            const {value} = type;
            // @ts-ignore
            const values = value.map(val => val.value)
            return {control: {type: values?.length <= 5 ? 'radio' : 'select'}, options: values};
        }
        case 'function':
        case 'symbol':
            return null
        default:
            return {control: {type: 'text'}};
    }
};
