package com.example.Reactdemo.person;

import java.util.UUID;


public class Person {
    private final UUID id;
    private final String name;
    private final String sername;
    private final int age;
    private final Gender gender;

    enum Gender{
        MALE,FEMAIL
    }

    public Person(UUID id, String name, String sername, int age, Gender gender) {
        this.id=id;
        this.name = name;
        this.sername = sername;
        this.age = age;
        this.gender = gender;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSername() {
        return sername;
    }

    public int getAge() {
        return age;
    }

    public Gender getGender() {
        return gender;
    }
}
