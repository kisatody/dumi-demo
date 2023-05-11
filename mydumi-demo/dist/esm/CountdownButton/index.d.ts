import React from "react";
import { ButtonProps } from 'antd/es/button';
interface CountdownButtonType extends Omit<ButtonProps, 'disabled' | 'onClick'> {
    /**
     * 最大秒数
     */
    maxSecondNum?: number;
    /**
     * 按钮默认文本
     */
    text?: string;
    /**
     * 加载时按钮文本
     */
    loadingText?: string;
    /**
     * 使用时按钮文本
     */
    disabledText?: (s: number) => string;
    /**
     * 点击按钮时触发的函数，其参数 completeCallback 需要在接口请求完毕后调用，用于告知组件接口请求已完成
     */
    onClick: (completeCallback: () => void) => void;
}
declare const CountdownButton: ({ maxSecondNum, text, loadingText, disabledText, onClick, ...rest }: CountdownButtonType) => React.JSX.Element;
export default CountdownButton;
