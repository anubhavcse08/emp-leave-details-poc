import React from 'react';
import './Lists.scss';

const Lists = ({ data = [] }) => {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Days</th>
                    <th>Months</th>
                    <th>Leave type</th>
                    <th>Url</th>
                </tr>
            </thead>
            <tbody>
                {data.length && data.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.days}</td>
                        <td>{item.months}</td>
                        <td>{item.reason}</td>
                        <td><a href={item.url}>Visit for More Info</a></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Lists;
