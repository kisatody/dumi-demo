import React from "react";
import {RankList} from 'mydumi-demo';

const RankListDemo = () => {
    const data = Array.from(new Array(10)).map((_,index) => ({
        label: `选项${index + 1}`,
        value: 10 - index
    }))

    return (
        <div>
            <RankList data={data}></RankList>
        </div>
    )
}

export default RankListDemo;