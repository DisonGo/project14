import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Sticker } from '../shared/interface/sticker.interface';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  constructor() {}
  oldTitle!: string;
  oldText!: string;
  oldDate!: any;
  oldId!: number;
  title = "";
  text = "";
  editing = false
  @Input() data!:Sticker;
  @Output() stickerEdited = new EventEmitter <Sticker>();
  @Output() stickerDelete = new EventEmitter <number>();
  turnOnEditing(){
    this.editing = true
    this.title = this.data.title
    this.text = this.data.text
    this.oldTitle = this.data.title 
    this.oldText = this.data.text 
    this.oldDate = this.data.date 
  }
  turnOffEditing(ending:boolean){
    if(ending){
      this.data.title = this.title
      this.data.text = this.text
      this.data.date = Date.now()
      this.stickerEdited.emit(this.data)
    }else{

    }
    this.editing = false
  }
  deleteSticker() {
    this.stickerDelete.emit(this.data.id)
  }
  ngOnInit(): void {}

}
