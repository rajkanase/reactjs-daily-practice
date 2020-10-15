import React, {Component} from 'react';
import ColumnComponent from './column';

const tableComponent = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <ColumnComponent />
                </tr>
            </tbody>
        </table>
    )
}

export default tableComponent;