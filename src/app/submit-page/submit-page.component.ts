import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EntryService } from '../entry.service';
// import { safuEntry } from '../safuEntry';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent implements OnInit {
  myForm: FormGroup;
  // edited = false;
  // thisone = "";
  // store: safuEntry[] = [];
  // newEntry: safuEntry;

  safuEntries: any = [];

  // constructor(private entryService: EntryService) {

  //   this.entryService.getAllEntries().subscribe(safuEntries => {this.safuEntries = safuEntries;});
  //  }

  // getEntry(name: string){
  //   this.entryService.getOneEntry(name).subscribe(safuEntries => {this.safuEntries = safuEntries;});
  // }

  ngOnInit() {
    // this.myForm = this.fb.group({

      // bwa: ['', Validators.required],
      // name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // comments: ['', Validators.required]

    // });
  }

  // onSubmit() {
  //   this.edited = true;
  //   this.newEntry = new safuEntry();
  //   this.newEntry.bwa = this.myForm.value.bwa;
  //   this.newEntry.name = this.myForm.value.name;
  //   this.newEntry.email = this.myForm.value.email;
  //   this.newEntry.comments = this.myForm.value.comments;
  //   this.entryService.addEntry(this.newEntry);
  //   this.myForm.reset()
  //   this.store = this.entryService.getEntries();
  //   this.thisone = this.store[this.store.length - 1].name;

  // }
 var 
}
