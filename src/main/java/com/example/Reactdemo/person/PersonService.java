package com.example.Reactdemo.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> selectAll() {
        return personRepository.selectAllPerson();
    }

    public void addNewPerson(Person person){
        UUID id =UUID.randomUUID();
        personRepository.insertPerson(person,id);
    }


}
