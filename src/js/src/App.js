
import './App.css';
import { getAllStudents} from './Client'
import React, { Component } from 'react';
import {
  Table , Avatar, Spin
} from 'antd';
import Container from './Container'

class App extends Component {

  state={
    students: [],
    isFetching: false
  }

  componentDidMount(){
    this.fetchStudents();
  }

  fetchStudents =() =>{
    this.setState({
      isFetching:true
    });
    getAllStudents()
     .then(res => res.json()
       .then(students => {
         console.log(students);
         this.setState({
           students,
           isFetching:false
         });
       }));
  }

  render() {
    
    const { students, isFetching} =this.state;

    if(isFetching){
      return(
        <Container>
          <Spin size='large'/>
        </Container>
      );
    }

    if( students && students.length){

      const columns =[
        {
          title:'',
          key:'avatar',
           render: (text, student) =>(
           <Avatar size='large' style={{backgroundColor:'#F3E2A9'}} >
             {`${student.name.charAt(0).toUpperCase()}${student.sername.charAt(0).toUpperCase()}`}
           </Avatar>
         )
        },

        {
          title:'Name',
          dataIndex: 'name',
          key: 'name'
        },

        {
          title:'Sername',
          dataIndex: 'sername',
          key: 'sername'
        },

        {
          title:'Age',
          dataIndex: 'age',
          key: 'age'
        },

        {
          title:'Gender',
          dataIndex: 'gender',
          key: 'gender'
        }
      ];
      return(
        <Container>
         <Table dataSource={students} 
         columns={columns} 
         pagination={false}
         rowKey='id'></Table>
         </Container>);
    }


    return <h1> No Students !</h1>
  }
}

export default App;
