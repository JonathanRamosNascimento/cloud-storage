import { FileEntry } from './models/fileentry.model';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  uploadFile(f: File){
    let path = `myfiles/${f.name}`;
    let task = this.storage.upload(path, f);
    task.snapshotChanges().subscribe((s)=> console.log(s));
  }

  upload(f: FileEntry) {
    let newfilename = `{$(new Date()).getTime()}_${f.file.name}`;
    let path = `myfiles/${newfilename}`;
    f.task = this.storage.upload(path, f.file);
    f.state = f.task.snapshotChanges().pipe(
      map((s) => f.task.task.snapshot.state),
      catchError(s => {
        return of(f.task.task.snapshot.state);
      })
    )
  }
}
