import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  Sticker
} from './shared/interface/sticker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project12';
  idCounter = 0
  stickers: Sticker[] = []
  // @Input() stickerCreated!: Sticker;
  createSticker(sticker: Sticker) {
    sticker.id = ++this.idCounter
    this.stickers.push(sticker)
  }
  deleteSticker(data:any) {
    for (let i = 0; i < this.stickers.length; i++) {
      if (this.stickers[i].id == data.id) {
        this.stickers.splice(i, 1)
      }
    }
  }
}
