import React, {Component} from 'react';
import {Formik} from 'formik';
import { Input,Button } from 'antd';

const ButtonMurgin ={marginBottom :'10px' }

class AddPersonForm extends Component{
    render(){
        return(
           
            <Formik 
              initialValues={{ name:null, sername:null, age: null, gender:null }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {props => (
                <form onSubmit={props.handleSubmit}>
                  <Input
                    style ={ButtonMurgin}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                    placeholder="Name"
                    color ="#A9F5BC"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                   
                   <Input
                    style ={ButtonMurgin}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.sername}
                    name="sername"
                    placeholder="senmame"
                  />
                  {props.errors.sername && <div id="feedback">{props.errors.name}</div>}

    
                  <Input
                    style ={ButtonMurgin}
                    type="number"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.age}
                    name="age"
                    placeholder="Age"
                  />
                  {props.errors.age && <div id="feedback">{props.errors.age}</div>}

                  <Input
                    style ={ButtonMurgin}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.gender}
                    name="gender"
                    placeholder="Gender"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                
                
                  <Button type="submit">Enter</Button>
                </form>
              )}
            </Formik>
         
        );
    }
}

export default AddPersonForm;
