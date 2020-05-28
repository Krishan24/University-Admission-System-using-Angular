import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProgramService} from "../service/program.service";
import {Program} from "../model/program.model";

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {

  programs: Program[];

  constructor(private router: Router, private programService: ProgramService) { }

  ngOnInit() {
    this.programService.getPrograms()
      .subscribe( data => {
        this.programs = data;
      });
  }

  deleteProgram(program: Program): void {
    this.programService.deleteProgram(program.id)
      .subscribe( data => {
        this.programs = this.programs.filter(u => u !== program);
      })
  };

  editProgram(program: Program): void {
    localStorage.removeItem("editProgramId");
    localStorage.setItem("editProgramId", program.id.toString());
    this.router.navigate(['edit-program']);
  };

  addProgram(): void {
    this.router.navigate(['add-program']);
  };
}
