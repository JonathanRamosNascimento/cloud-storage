import { MyFile } from './../models/myfile.model';
import { FilesService } from './../files.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent implements OnInit {

  files: Observable<MyFile[]>;

  constructor(
    private fileService: FilesService
  ) { }

  ngOnInit() {
    this.files = this.fileService.getFiles();
  }

  getDate(n) {
    return new Date(n);
  }

  delete(f: MyFile) {
    this.fileService.deleteFile(f);
  }
}
