import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function ChatContent() {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };
    return (
        <div style={{ width: '68vw', height: '83vh',marginTop:'5px', display: 'flex', flexDirection: 'column-reverse',boxShadow:'8px 8px 8px rgba(0,0,0,0.3)' ,borderRadius:'10px'}}>
            <div style={{ height: '35%', borderRadius: '0 0 10px 10px',border:'1px solid black'}}>
                {/* 输入框 */}
                <TextArea
                    bordered={false}
                    showCount
                    maxLength={100}
                    style={{ height: '100%', resize: 'none' }}
                    onChange={onChange}
                    // onPressEnter={}
                    placeholder="请输入内容"
                />
            </div>
            <div style={{ height: '65%',border:'1px solid black',borderBottom:'0px', borderRadius: '10px 10px 0 0' }}>content</div>
        </div>
    );
}
