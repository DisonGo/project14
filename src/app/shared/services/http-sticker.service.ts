import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sticker } from '../interface/sticker.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpStickerService {

  constructor(private http: HttpClient) { }
  clientRoute = "http://localhost:3000/stickers/"
  getStickers(): Promise<any>{
    return this.http.get(this.clientRoute).toPromise()
  }
  postSticker(data:Sticker){
    return this.http.post(this.clientRoute,data).toPromise()
  }
  deleteSticker(id:number){
    return this.http.delete(this.clientRoute+id).toPromise()
  }
  editSticker(data:Sticker){
    return this.http.patch(this.clientRoute+data.id,data).toPromise()
  }
}
