import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

const MAX_SECOND_NUM = 60;

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

const CountdownButton = ({
    maxSecondNum = MAX_SECOND_NUM,
    text = '获取验证码',
    loadingText = '发送中',
    disabledText = (s) => `${s} 秒后重试`,
    onClick = (completeCallback) => {
        completeCallback()
    },
    ...rest
}: CountdownButtonType) => {

    const [authCodeArgs, setAuthCodeArgs] = useState({
        timing: false,
        count: maxSecondNum,
    });

    useEffect(() => {
        let timer: number | undefined = undefined;
        if (authCodeArgs.timing) {
            timer = window.setInterval(() => {
                setAuthCodeArgs((pre) => {
                    const { count, timing } = pre;
                    if (count === 1) {
                        window.clearInterval(timer);
                        return { timing: false, count: maxSecondNum };
                    }
                    return { timing, count: count-1 };
                })
            }, 1000);
        }
        return () => window.clearInterval(timer);
    }, [authCodeArgs.timing]);

    const completeCallback = () => {
        setAuthCodeArgs({
            ...authCodeArgs,
            timing: true,
        });
    };

    let buttonText;
    if (rest.loading) {
        buttonText = loadingText;
    } else if (authCodeArgs.timing) {
        buttonText = disabledText(authCodeArgs.count);
    } else {
        buttonText = text;
    }

    return (
        <Button
            disabled={authCodeArgs.timing}
            style={{minWidth: 100, ...(rest.style || {})}}
            onClick={() => { onClick && onClick(completeCallback) }}
            {...rest}
        >
            {buttonText}
        </Button>
    );
}

export default CountdownButton