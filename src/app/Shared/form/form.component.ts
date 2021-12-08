import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addUser } from '../../state/stateActions.actions';
import { User } from '../models';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  registerForm: any = {};
  userPicture: string | undefined = '';

  constructor(private store: Store, private uiService: UIService, private router: Router) { }

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



  }

  onSubmit(event: any) {
    this.uiService.getUsers().subscribe(userData => {
      this.userPicture = userData.picture;
    })

    const form: any = this.registerForm.value;
    const user: User = {
      name: form.firstName,
      lastName: form.lastName,
      email: form.email,
      id: (Math.random() * 10).toString(),
      password: form.password,
      picture: this.userPicture
    }

    this.store.dispatch(addUser({ user }))

    this.router.navigate(['/customers'])
  }

}
