import React, { Component } from 'react'

export default class componentName extends Component {
    componentDidMount() {
        var str = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function RepeatArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
var str1 = RepeatArr(str);
console.log(str1) // 结果为
    }
    render() {
        return (
            <div>
                this is page
            </div>
        )
    }
}
