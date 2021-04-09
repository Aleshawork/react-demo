package com.example.Reactdemo.person;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Repository
public class PersonRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PersonRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Person> selectAllPerson(){
        String sql ="SELECT * FROM person;";
        List<Person> personList = jdbcTemplate.query(sql,(resultSet,i)->{

            String UUID_Str = resultSet.getString("person_id");
            UUID uuid = UUID.fromString(UUID_Str);
            String name= resultSet.getString("name");
            String sername =resultSet.getString("sername");
            int age =Integer.parseInt(resultSet.getString("age"));
            String genderStr = resultSet.getString("gender").toUpperCase();
            Person.Gender gender = Person.Gender.valueOf(genderStr);
            return new Person(uuid,name,sername,age,gender);

        });
        return personList;
    }

}
