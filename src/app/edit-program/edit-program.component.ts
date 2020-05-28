import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../service/program.service";
import {Router} from "@angular/router";
import {Program} from "../model/program.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.css']
})
export class EditProgramComponent implements OnInit {

  program: Program;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private programService: ProgramService) { }

  ngOnInit() {
    let programId = localStorage.getItem("editProgramId");
    if(!programId) {
      
      alert("Invalid action.")
      this.router.navigate(['list-program']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      programName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.programService.getProgramById(+programId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.programService.updateProgram(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-program']);
        },
        error => {
          alert(error);
        });
  }

}
