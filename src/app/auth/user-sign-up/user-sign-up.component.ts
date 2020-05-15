import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/auth.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-user-sign-up",
  templateUrl: "./user-sign-up.component.html",
  styleUrls: ["./user-sign-up.component.scss"],
})
export class UserSignUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initFormControl();
  }

  initFormControl() {
    this.userForm = this.formBuilder.group({
      first_name: ["",[Validators.required, Validators.pattern("([a-zA-Z]+)")]],
      last_name: ["", [Validators.required, Validators.pattern("([a-zA-Z]+)")]],
      email_id: ["", [Validators.pattern('([a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password: ["", Validators.required],
    });
  }

  onSave() {
    console.log(this.userForm.value);

    if (!this.userForm.valid) {
      this.authService.openToast(
        "Please Enter All The Required Fields",
        "Close"
      );
      return;
    }
    
    this.authService.userRegister(this.userForm.value).subscribe(
      (data) => {
        if (data) {
          this.authService.openToast("User registered successfully", "Close");
        }
      },
      (err) => {
        this.authService.openToast(err["error"]["message"]
        , 'Close');
      }
    );
  }
}
