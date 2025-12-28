package facade.java.com.facade.example.src.facade;

import java.io.File;

import facade.java.com.facade.example.src.AudioMixer;
import facade.java.com.facade.example.src.BitrateReader;
import facade.java.com.facade.example.src.Codec;
import facade.java.com.facade.example.src.CodecFactory;
import facade.java.com.facade.example.src.MPEG4CompressionCodec;
import facade.java.com.facade.example.src.OggCompressionCodec;
import facade.java.com.facade.example.src.VideoFile;

public class VideoConversionFacade {
    public File convertVideo(String fileName, String format) {
        System.out.println("VideoConversionFacade: conversion started.");

        VideoFile file = new VideoFile(fileName);
        Codec sourceCodec = CodecFactory.extract(file);
        Codec destinationCodec;

        if (format.equals("mp4")) {
            destinationCodec = new MPEG4CompressionCodec();
        } else {
            destinationCodec = new OggCompressionCodec();
        }

        VideoFile buffer = BitrateReader.read(file, sourceCodec);
        VideoFile intermediateResult = BitrateReader.convert(buffer, destinationCodec);
        File result = (new AudioMixer()).fix(intermediateResult);

        System.out.println("VideoConversionFacade: conversion completed.");
        return result;
    }
}
