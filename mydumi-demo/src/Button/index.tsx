import React from "react";
import './index.less';

interface ButtonType {
    /**
     * 按钮类型
     */
    type?: string,
    /**
     * 按钮默认文本
     */
    children?: string | number | undefined | null,
}

const Button = ({
    type, children
}: ButtonType) => {
    switch (type) {
        case 'primary':
            return <button className="primary">{children}</button>;
        case 'success':
            return <button className="success">{children}</button>;
        case 'warning':
            return <button className="warning">{children}</button>;
        case 'error':
            return <button className="error">{children}</button>;
        case 'dashed':
            return <button className="dashed">{children}</button>;
        default:
            return <button className="default">{children}</button>;
    }
}

export default Button