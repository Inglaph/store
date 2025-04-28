import { Component, ElementRef, Input, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent implements AfterViewInit {

  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef<HTMLDivElement>;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(): void {
    if (!this.audioUrl) {
      console.error('No se proporcionó una URL de audio');
      return;
    }

    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple',
      height: 100,
      barWidth: 2,
      barGap: 1,
    });

    this.ws.on('play', () => {
      this.isPlaying.set(true);
    });

    this.ws.on('pause', () => {
      this.isPlaying.set(false);
    });
    this.ws.on('error', (error) => {
      console.error('Error al cargar el audio:', error);
    });

    this.ws.on('ready', () => {
      console.log('Audio cargado y listo para reproducir');
    });
  }

  playPause(): void {
    if (!this.ws) {
      console.error('WaveSurfer no está inicializado');
      return;
    }
    this.ws.playPause();
  }

  ngOnDestroy(): void {
    if (this.ws) {
      this.ws.destroy();
    }
  }
}

