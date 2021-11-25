import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  registerForm: any = {};



  ngOnInit(): void {

    this.registerForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('',
        [Validators.required,
          Validators.pattern(this.pattern)]),
      confirm: new FormControl('', [Validators.required]),
      termsAgree: new FormControl(''),

    })

    // this.registerForm.valueChanges.subscribe((data: any) => {
    //   console.log('data: ', this.registerForm.controls)
    // })

  }

  onSubmit(event: any) {

    console.log('form: ', this.registerForm.value)
  }

}
