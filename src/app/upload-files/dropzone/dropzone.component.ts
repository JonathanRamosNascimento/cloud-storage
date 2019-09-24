import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  isDraggingOver = false;

  constructor() { }

  ngOnInit() {
  }

  onDragOverEvent(event: DragEvent){
    console.log(event);
    this.isDraggingOver = true;
  }

  onDragLeaveEvent(event: DragEvent){
    console.log(event);
    this.isDraggingOver = false;
  }
}
