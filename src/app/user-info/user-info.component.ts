import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserInfo } from 'src/models/user-info';
import { UserInfoService } from 'src/services/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfoForm: FormGroup;
  isSaved = false;
  isErrorOccured = false;
  constructor( private userInfoService: UserInfoService) {
    this.userInfoForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    let userInfo: IUserInfo = { firstName: this.userInfoForm.controls['firstName'].value, lastName:  this.userInfoForm.controls['lastName'].value};
    this.userInfoService.saveUserInfo(userInfo).subscribe((response: any) => {
      this.isSaved = true;
      this.isErrorOccured = false;
    }, (error: HttpErrorResponse) => {
      this.isSaved = false;
      this.isErrorOccured = true;
    });
  }

}
