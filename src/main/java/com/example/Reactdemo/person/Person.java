package com.example.Reactdemo.person;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;


public class Person {
    private final UUID id;
    private final String name;
    private final String sername;
    private final int age;
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

    @JsonProperty("peerson_id")
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
    public Gender getGender() {
        return gender;
    }
}
