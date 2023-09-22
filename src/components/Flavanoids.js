import React from 'react';
import JsonData from '../assets/Wine-Data.json';

function FlavDataDisplay() {
    const classes = {};
    JsonData.map((value, index) => {
        classes[value?.Alcohol] = {
            index: (classes?.[value?.Alcohol]?.['index'] || 0) + 1,
            Flavanoids: [
                ...(classes?.[value?.Alcohol]?.['Flavanoids'] || []),
                value?.Flavanoids
            ]
        }
    });

    // Calculating Sum of array
    const sum = (arr) => {
        return arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    }

    // Calculating Median of array
    const median = (arr) => {
        const mid = Math.floor(arr.length / 2),
            nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? parseFloat(nums[mid]) : (parseFloat(nums[mid - 1]) + parseFloat(nums[mid])) / 2;
    };

    // Calculating Mode of array
    const getMaxIndex = (arr) => {
        const obj = {};
        arr.map(val => obj[val] = (obj?.[val] || 0) + 1);
        const max = Math.max(...Object.values(obj));
        console.log(max, arr)
        return Object.keys(obj)[Object.values(obj).indexOf(max)];
    }

    return (
        <div>
            <h3>Mean, Median, Mode of “Flavanoids”.</h3>
            <div className='table-responsive'>
                <table>
                    <thead>
                        <tr>
                            <th>Measures</th>
                            {Object.keys(classes).map(clas => {
                                return (
                                    <th>Alcohol {clas}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Mean</th>
                            {Object.values(classes).map(val =>
                                <td>{sum(val['Flavanoids']) / val['index']}</td>
                            )}
                        </tr>
                        <tr>
                            <th>Median</th>
                            {Object.values(classes).map(val =>
                                <td>{median(val['Flavanoids'])}</td>
                            )}
                        </tr>
                        <tr>
                            <th>Mode</th>
                            {Object.values(classes).map(val =>
                                <td>{getMaxIndex(val['Flavanoids'])}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FlavDataDisplay;
