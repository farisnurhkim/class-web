/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
} from "lucide-react";
import { useModal } from '@/hooks/useModal';

const ModalTeacherDay = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    setOpen(true);
  }, []);


  const { onClose, type, isOpen } = useModal();

  const isOpenModal = open || (isOpen && type === 'TeacherDay');
  

  // Handle time updates
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle metadata loaded (get duration)
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle play/pause
  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle slider change
  const handleSliderChange = (value: any) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };


  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOnOpenChange = () => {
    onClose();
    setOpen(false);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }

  

  return (
    <Dialog open={isOpenModal} onOpenChange={handleOnOpenChange}>
      <DialogContent className="max-w-sm max-h-screen">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            National Teachers Day
          </DialogTitle>
        </DialogHeader>
        
        <div className="bg-blue-900 p-6 rounded-lg relative">
          {/* Audio Element */}
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            loop
            src="/audio/guruku.mp3"  // Replace with your actual audio file
          />
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-white rounded-full transform rotate-45" />
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-white rounded-full transform rotate-45" />
          </div>
          
          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            
            <div className="bg-gray-200 p-2 rounded transform -rotate-3">
              <img 
                src="/gallery/images/bukuTahunan/bukuTahunan(1).jpg"
                alt="Teachers group photo 1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded transform rotate-3">
              <img 
                src="/gallery/images/random/random(21).jpg"
                alt="Teachers group photo 2"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded transform rotate-2">
              <img 
                src="/gallery/images/random/random(20).jpg"
                alt="Teachers group photo 3"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded transform -rotate-2 flex justify-center">
              <img 
                src="/gallery/images/random/random(1).jpg"
                alt="Teachers group photo 4"
                className="w-full h-auto rounded object-contain"
              />
            </div>
          </div>

          {/* Message card */}
          <div className="bg-white p-2 rounded-lg text-center shadow-lg">
            <p className="text-gray-800 text-sm">
              "Thank you for the valuable knowledge and experience you have given us"
            </p>
            <p className="text-gray-800 text-xs mt-1 text-center">
                RPL 1 Batch 2021 
            </p>
          </div>

          {/* Spotify-like Music Player */}
          <div className="mt-3 bg-gray-900/80 p-3 rounded-lg text-white">
            {/* Song Info */}
            <div className="text-center mb-2">
              <h3 className="font-semibold text-sm">Guruku Tersayang</h3>
              <p className="text-sm text-gray-400">Special Song</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                className="w-full"
                onValueChange={handleSliderChange}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-2 mt-1">
              
              <button 
                className="text-gray-400 hover:text-white transition"
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                  }
                }}
              >
                <SkipBack className="w-6 h-6" />
              </button>
              <button 
                className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
                onClick={togglePlay}
              >
                {isPlaying ? 
                  <Pause className="w-6 h-6" /> : 
                  <Play className="w-6 h-6" />
                }
              </button>
              <button 
                className="text-gray-400 hover:text-white transition"
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = duration;
                  }
                }}
              >
                <SkipForward className="w-6 h-6" />
              </button>
             
            </div>

            {/* Volume Control */}
           
          </div>

          {/* Decorative ribbon */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-2 bg-amber-200 rounded-full" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTeacherDay;