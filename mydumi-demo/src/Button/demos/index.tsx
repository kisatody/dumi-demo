import React from "react";
import { Button } from "mydumi-demo";

const ButtonDemo = () => {
    return (
       <div style={{display: 'flex', justifyContent:'space-evenly'}}>
            <Button>默认</Button>
            <Button type="success">成功</Button>
            <Button type="warning">警告</Button>
            <Button type="primary">primary</Button>
            <Button type="error">异常</Button>
            <Button type="dashed">dashed</Button>
       </div>
    )
}

export default ButtonDemo;