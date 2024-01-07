import * as _ from "lodash";

export function greeting1() {
    return 'Hello';
}

export function greeting2() {
    return _.join(['Hello', 'from'], ' ');
}

export function greeting3() {
    return _.join(['Hello', 'from', "'webpack-playground/typescript-web'"], ' ');
}

export function greeting4() {
    return _.join(['Hello', 'from', "'webpack-playground/typescript-web'", '!'], ' ');
}
