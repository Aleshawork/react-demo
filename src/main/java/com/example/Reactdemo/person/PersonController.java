package com.example.Reactdemo.person;

import com.example.Reactdemo.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("person")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/all")
    public List<Person> getAll(){
       return personService.selectAll();
    }

    @PostMapping("add")
    public void  addNewPerson(@RequestBody Person person){
        personService.addNewPerson(person);
    }

}
