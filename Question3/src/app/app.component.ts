import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  phoneNos = new FormArray([]);

  public get controls() {
    return (<FormArray>this.myForm.get('phoneNos')).controls;
  }

  ngOnInit(): void {
    this.onAddPhoneNo();
    this.myForm = new FormGroup({
      'phoneNos': this.phoneNos
    });
  }

  onSubmit() {
    console.log(this.phoneNos.value);
  }

  onAddPhoneNo() {
    this.phoneNos.push(new FormGroup({
      phoneNumber: new FormControl()
    }));
  }

  onDeletePhoneNumber(index: number) {
    this.phoneNos.removeAt(index);
  }
}
