import React from "react";
import './index.less';
interface RankListProps {
    data: {
        label: string;
        value: string | number;
    }[];
}
declare const RankList: ({ data }: RankListProps) => React.JSX.Element;
export default RankList;
