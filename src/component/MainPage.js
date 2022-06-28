import React, { useState, useEffect } from 'react';
import { Card,List,Button, Row,Col, Divider,Typography } from 'antd';
import './HomePage.css';
import Footer from './Footer';
import HomePage from './HomePage';
import VirtualList from 'rc-virtual-list';
import { CloseOutlined,CheckCircleOutlined } from '@ant-design/icons';


const MainPage = () => {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [type,_type] = useState('');
    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    // function to add a task
    const completeTask = index => {
        const newTasks = [...tasks];

        let indx = newTasks.findIndex(
            (rank, idx) => {
                return rank.title === index;
            }
        );
        if(newTasks[indx].completed ===true){
            newTasks[indx].completed = false;
        }else{
            newTasks[indx].completed = true;
        }
        setTasks(newTasks);
    };

    // function to remove a task
    const removeTask = index => {
        const newTasks = [...tasks];
        let indx = newTasks.findIndex(
            (rank, idx) => {
                return rank.title === index;
            }
        );
        newTasks.splice(indx, 1);
        setTasks(newTasks);
    };

    // function to make complete/pending all pending/completed tasks
    const completeAllTasksFunc = () => {
        const newTasks = [...tasks];
        let booleanValue;
        newTasks.filter(task=>!task.completed).length >0?
        booleanValue = true:booleanValue = false;
        newTasks.forEach((element, index) => {
            newTasks[index].completed = booleanValue;
          });
        setTasks(newTasks);
    }

    //remove only completed tasks
    const removeCompleted = () => {
        const newTasks = [...tasks];
          let newtaskArr = newTasks.filter(function( obj ) {
            return !obj.completed;
          });
        setTasks(newtaskArr);
    }

    console.log(tasks,"Taskssss",type);
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "400px", alignItems: 'center' }}>
            <Card className="site-card-border-less-wrapper" size="default">
                {tasks.length == 0 ? <HomePage allTasks={tasks} completeAllTasks={completeAllTasksFunc} addTask={addTask} /> :
                    <List
                        size="large"
                        header={<HomePage allTasks={tasks} completeAllTasks={completeAllTasksFunc} addTask={addTask} />}
                        footer={<Footer tasksRemaining={tasksRemaining} removeCompleted={removeCompleted} type={type} _type={_type} />}
                        bordered={true}
                        dataSource={type === 'All'?tasks.filter(task=>!task.completed):type === 'Complete'?tasks.filter(task=>task.completed):tasks}
                        renderItem={item =>
                            <List.Item>
                                <div style={{ display: "flex", width: "100%", justifyContent: 'space-between' }}>
                                    <CheckCircleOutlined onClick={() => completeTask(item.title)} />
                                    <div style={{ textDecoration: item.completed ? "line-through" : "", width: '80px !important' }}>
                                        {item.title}
                                    </div>
                                    <div>
                                        <CloseOutlined onClick={() => removeTask(item.title)} />
                                    </div>
                                </div>
                            </List.Item>}
                    />
                }</Card>
        </div>
    );
}

export default MainPage;