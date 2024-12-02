import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'podcast-content',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  isPlaying: boolean = false
  currentTime: string = '0:00'
  duration: string = '0:00'
  audioSrc: string = 'assets/audio/sample.wav'
  seekTime: number = 0

  constructor() {}

  toggleAudio(audio: HTMLAudioElement): void {
    if (this.isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    this.isPlaying = !this.isPlaying
  }

  updateTime(audio: HTMLAudioElement): void {
    const currentTime = audio.currentTime
    this.currentTime = this.formatTime(currentTime)
    const totalDuration = audio.duration
    const percentage = (currentTime / totalDuration) * 100

    const player = document.querySelector('.audio-player')
    ;(player as HTMLElement).style.setProperty('--buffered-width', '100%')
    ;(player as HTMLElement).style.setProperty(
      '--seek-before-width',
      `${percentage}%`
    )
    ;(player as HTMLElement).style.setProperty('--volume-before-width', '100%')
  }

  updateDuration(audio: HTMLAudioElement): void {
    const duration = audio.duration
    this.duration = this.formatTime(duration)
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  seekAudio(audio: HTMLAudioElement, event: any): void {
    const seekTime = audio.duration * (event.target.value / 100)
    audio.currentTime = seekTime
  }

  setVolume(audio: HTMLAudioElement, event: any): void {
    const volume = event.target.value / 100
    audio.volume = volume
  }
}
