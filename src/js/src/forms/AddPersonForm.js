import React, {Component} from 'react';
import {Formik} from 'formik';
import { Input,Button,Tag } from 'antd';
import {addNewPerson} from '../Client'

const ButtonMurgin ={marginBottom :'10px' }
const errorTag ={backgroundColor: '#F6CECE', color:'#585858', ...ButtonMurgin }

class AddPersonForm extends Component{
    render(){
        return(
           
            <Formik 
              initialValues={{ name:'', sername:'', age: 0, gender:'' }}
              validate={
                values =>{
                  const errors ={};

                  if(!values.name){
                    errors.name='First Name Required';
                  } 

                  if(!values.sername){
                    errors.sername='Second Name Required';
                  }

                  if(!values.age){
                    errors.age='Age Required';
                  } else if( values.age<18){
                    errors.age ='Age must be more than 18';
                  }

                  if(!values.gender){
                    errors.gender='Gender Required';

                  } else if(!['MALE','FEMALE'].includes(values.gender)){
                    errors.gender='Gender must be equals [ MALE, FEMALE]';
                  }

                  return errors;
                }
               
              }
              onSubmit={(student, {setSubmitting}) =>{
                addNewPerson(student).then(()=> {
                  this.props.onSuccess();
                  setSubmitting(false);

                })
              }
              }
            >
              {({
                values,
                errors,
                 submitForm,
                 handleChange,
                 handleSubmit,
                 handleBlur,
                 isValid,
                 isSubmitting,
                 touched
                }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    style ={ButtonMurgin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                    placeholder="Name"
                    color ="#A9F5BC"
                  />
                  {errors.name && <Tag id="feedback" style={errorTag}>{errors.name}</Tag>}
                   
                   <Input
                    style ={ButtonMurgin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sername}
                    name="sername"
                    placeholder="Sermame"
                  />
                  {errors.sername && <Tag id="feedback" style={errorTag}>{errors.sername}</Tag>}

    
                  <Input
                    style ={ButtonMurgin}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    name="age"
                    placeholder="Age"
                  />
                  {errors.age && <Tag id="feedback" style={errorTag}>{errors.age}</Tag>}

                  <Input
                    style ={ButtonMurgin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    name="gender"
                    placeholder="Gender"
                  /> 
                  {errors.gender && <Tag id="feedback" style={errorTag}>{errors.gender}</Tag>}
                
                
                  <Button onClick={()=> submitForm()}
                   type="submit"
                   disabled={isSubmitting | (touched && !isValid) }
                    >Enter</Button>
                </form>
              )}
            </Formik>
         
        );
    }
}

export default AddPersonForm;
