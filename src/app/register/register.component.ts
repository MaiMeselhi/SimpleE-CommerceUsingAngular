import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmedValidator } from '../confiremed.validators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm : any;

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
    Name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.pattern('')],
    ],
    Email: [
      '',
      [Validators.required, Validators.minLength(4), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    userName: [
        '',
        [Validators.required, Validators.minLength(4), Validators.pattern(/^\S*$/)]],
    password: [
          '',
    [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
   confirmpassword: [
      '',
    [Validators.required, Validators.minLength(4), Validators.pattern('')]]



  },
  {
    validator: ConfirmedValidator('password', 'confirmpassword')
  }
  )


}

get registerFormControls() {
  return this.registerForm.controls;
}

submitReactiveForm() {
  console.log(this.registerForm);
}

}
