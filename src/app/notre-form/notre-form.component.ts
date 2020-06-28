import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Annee } from '../annee';
import { NoteServiceService } from '../note-service.service';
import { AnneeServiceService } from '../annee-service.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-notre-form',
  templateUrl: './notre-form.component.html',
  styleUrls: ['./notre-form.component.css']
})
export class NotreFormComponent implements OnInit {
  note: Note = new Note();
  employees : Observable<Employee[]>;
  annees: Observable<Annee[]>;
  notes: Observable<Note[]>;
  n = new Date().getFullYear();
  submitted = false;

  
  constructor(private noteService: NoteServiceService, private anneeService: AnneeServiceService,private empService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }
  
  loadProjects() {
    this.annees = this.anneeService.getAnneesList();
    this.employees = this.empService.getEmployeesList();
  }
  
  newDemande(): void {
    this.submitted = false;
    this.note = new Note();
  }

  save() {

    this.noteService.createNote(this.note)
      .subscribe(data => {
        console.log(data);
        this.notes = this.noteService.getNoteList();
      }, error => console.log(error));
      this.note = new Note();
      this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }

}
