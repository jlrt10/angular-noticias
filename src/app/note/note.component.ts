import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() idNote = 0;
  @Input() title = '';
  @Input() category = '';
  @Input() date = '';
  @Input() picture = '';
  
  constructor() { }

  ngOnInit(): void {
  }
}
