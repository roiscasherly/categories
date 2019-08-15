import { I18n } from '@lingui/core';
declare const _default: (i18n: I18n) => ({
    id: number;
    name: string;
    icon: string;
    categories: ({
        id: number;
        name: string;
        icon: string;
        attributes: {
            name: string;
            type: string;
            required: boolean;
        }[];
    } | {
        id: number;
        name: string;
        icon: string;
        attributes?: undefined;
    })[];
} | {
    id: number;
    name: string;
    icon: string;
    categories: {
        id: number;
        name: string;
        icon: string;
        categories: ({
            id: number;
            name: string;
            icon: string;
            attributes?: undefined;
        } | {
            id: number;
            name: string;
            icon: string;
            attributes: {
                name: string;
                type: string;
                required: boolean;
            }[];
        })[];
    }[];
} | {
    id: number;
    name: string;
    icon: string;
    categories: ({
        id: number;
        name: string;
        icon: string;
        attributes: {
            name: string;
            type: string;
            required: boolean;
        }[];
        categories?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        categories: {
            id: number;
            name: string;
            icon: string;
            attributes: {
                name: string;
                type: string;
                required: boolean;
            }[];
        }[];
        attributes?: undefined;
    })[];
})[];
export default _default;
