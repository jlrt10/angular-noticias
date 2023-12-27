import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/Note';
import { noteList } from '../../constants/note-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'angular-noticias';
  categoryNote = '';
  searchNotes: Note[] = [];
  notes: Note[] = noteList;

  constructor() { }

  ngOnInit(): void {
  }

  searchNote(category: string) {
    this.searchNotes = this.notes.filter(itemNote => itemNote.category.toLocaleLowerCase().includes(category.toLocaleLowerCase()));
 }
}
