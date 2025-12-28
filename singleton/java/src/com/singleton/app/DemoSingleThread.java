package com.singleton.app;

public class DemoSingleThread {
    
    public static void main(String[] args) {
        System.out.println("If you see the same value, then singleton was reused\n");
        Singleton singleton = Singleton.getInstance("FOO");
        Singleton anotherSingleton = Singleton.getInstance("BAR");
        System.out.println(singleton.value);
        System.out.println(anotherSingleton.value);
    }
}
