import React from "react";
import './index.less';
interface ButtonType {
    /**
     * 按钮类型
     */
    type?: string;
    /**
     * 按钮默认文本
     */
    children?: string | number | undefined | null;
}
declare const Button: ({ type, children }: ButtonType) => React.JSX.Element;
export default Button;
