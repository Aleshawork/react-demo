package com.example.Reactdemo.person;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PersonService {

    public List<Person> selectAll() {
        return List.of(
                new Person(UUID.randomUUID()
                        ,"Egor",
                        "Egorov",
                        45,
                        Person.Gender.MALE
                ),
                new Person(UUID.randomUUID(),
                        "Ivan",
                        "Ivanov",
                        22,
                        Person.Gender.MALE));
    }


}
