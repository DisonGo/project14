import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  Sticker
} from './shared/interface/sticker.interface';
import { HttpStickerService } from './shared/services/http-sticker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project14';
  idCounter = 0
  stickers: Sticker[] = []
  constructor(private httpSerc:HttpStickerService){}
  async getStickers(){
    try{
      this.stickers = await this.httpSerc.getStickers()
    }catch(err){
      console.log(err);
      
    }finally{
      this.stickers.sort((a,b)=>{
        return a.id-b.id      
      })
      this.idCounter = this.stickers[this.stickers.length-1].id
    }
  }
  async createSticker(sticker:Sticker){
    try{
      this.getStickers()
      sticker.id = ++this.idCounter
      await this.httpSerc.postSticker(sticker)
    }catch(err){
      console.log(err);
      
    }finally{
      this.getStickers()
    }
  }
  async deleteSticker(id:number){
    try{
      await this.httpSerc.deleteSticker(id)
    }catch(err){
      console.log(err);
      
    }finally{
      this.getStickers()
    }
  }
  async editSticker(sticker:Sticker){
    try{
      await this.httpSerc.editSticker(sticker)    
    }catch(err){
      console.log(err);
    }finally{
      this.getStickers()
    }
  }
  ngOnInit(){
    this.getStickers()
  }
}
