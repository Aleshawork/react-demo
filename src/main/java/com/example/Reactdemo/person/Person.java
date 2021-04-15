package com.example.Reactdemo.person;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;


public class Person {
    @JsonProperty("person_id")
    private final UUID id;

    @JsonProperty("name")
    private final String name;

    @JsonProperty("sername")
    private final String sername;

    @JsonProperty("age")
    private final int age;

    @JsonProperty("gender")
    private final Gender gender;

    enum Gender{
        MALE,FEMALE
    }

    public Person(UUID id, String name, String sername, int age, Gender gender) {
        this.id=id;
        this.name = name;
        this.sername = sername;
        this.age = age;
        this.gender = gender;
    }

    @JsonProperty("person_id")
    public UUID getId() {
        return id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("sername")
    public String getSername() {
        return sername;
    }

    @JsonProperty("age")
    public int getAge() {
        return age;
    }

    @JsonProperty("gender")
    public Gender getGender(){return gender;}

    @Override
    public String toString() {
        return id+"/"+name+"/"+sername +"/" +age+"/"+gender;
    }
}
