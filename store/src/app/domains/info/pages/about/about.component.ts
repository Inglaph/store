import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, CommonModule, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hello, world!');
  audioUrl = '../../../../../assets/music/audio.mp3';
  
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }
}
