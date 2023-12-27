import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/Note';
import { ActivatedRoute } from '@angular/router';
import { noteList } from '../../constants/note-list';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note = {} as Note;
  notes: Note[] = noteList;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    const idNote: Number = this.route.snapshot.params.id;
    if(idNote){
      this.note = this.notes.find(itemNote => itemNote.id == idNote)!;
    }
  }
}
