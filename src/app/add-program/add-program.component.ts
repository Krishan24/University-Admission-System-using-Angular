import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "../service/program.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private programService: ProgramService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      programName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['', Validators.required]
    });

  }

  onSubmit() {
    this.programService.createProgram(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-program']);
      });
  }

}
