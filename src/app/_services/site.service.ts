import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private storage: AngularFireStorage) { }

  getHomeImages(): Array<string> {
    var urlList: string[] = [];
    const folderRef = this.storage.ref('home');
    folderRef.listAll().subscribe(items => {
      for (const item of items.items) {
        item.getDownloadURL().then(url => {
          // Use the URL to display the image in the UI or perform other operations on the image
          urlList.push(url)
        });
      }
    });
    return urlList;
  }
}
