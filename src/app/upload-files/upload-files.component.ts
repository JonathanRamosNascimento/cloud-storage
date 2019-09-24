import { FilesService } from './../files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  constructor(
    private filesService: FilesService
  ) { }

  ngOnInit() {
  }

  onDropFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.filesService.uploadFile(files.item(i));
    }
    console.log(files);
  }
}