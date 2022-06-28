import React, {useRef,useEffect} from 'react';
import {Form,Input} from 'antd';
import {DownOutlined } from '@ant-design/icons'

const HomePage = (
    { allTasks,completeAllTasks,addTask }
    ) => {
    const [form] = Form.useForm();
    const inputRef = useRef(null);
    
    useEffect(() => {
        if(allTasks.length >0)
        inputRef.current.focus();
      }, [allTasks]);

    //form submit
    const handleSubmit = (e)=> {
        form
        .validateFields()
        .then((values) => {
            if (!values.textData) return;
            addTask(values.textData);
            form.resetFields();
        })
        .catch((err) => {
          console.error("error", err);
        });
    }
    return (
        <>
            <Form
                form={form}
                onFinish={handleSubmit}
                autoComplete="off"
                style={{ background: "white", paddingLeft: "12px" }}
            >
                <Form.Item
                    name={"textData"}
                >
                    <Input
                        ref={inputRef}
                        placeholder="What needs to be done ?"
                        prefix={allTasks && allTasks.length > 0 ? <DownOutlined onClick={completeAllTasks} /> : ''}
                        bordered={false}
                    />
                </Form.Item>
            </Form>
        </>
    );
}

export default HomePage;