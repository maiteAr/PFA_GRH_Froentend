import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { Router } from '@angular/router';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  
  searchTe: string ='';
  notes: Observable<Note[]>;

  constructor(private notesService: NoteServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.notes = this.notesService.getNoteList();
  }
}