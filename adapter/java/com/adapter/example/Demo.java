package adapter.java.com.adapter.example;

import adapter.java.com.adapter.example.devices.Device;
import adapter.java.com.adapter.example.devices.Radio;
import adapter.java.com.adapter.example.devices.Tv;
import adapter.java.com.adapter.example.remotes.AdvancedRemote;
import adapter.java.com.adapter.example.remotes.BasicRemote;

public class Demo {
    
    public static void main(String[] args) {
        testDevice(new Tv());
        testDevice(new Radio());
    }

    public static void testDevice(Device device) {
        System.out.println("Testts with basic remote.");

        BasicRemote basicRemote = new BasicRemote(device);
        basicRemote.power();
        device.printStatus();

        System.out.println("Tests with advanced remote.");

        AdvancedRemote advancedRemote = new AdvancedRemote(device);
        advancedRemote.power();
        advancedRemote.mute();
        device.printStatus();
    }
}
