import { Component, OnInit } from '@angular/core';
 
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authService: AccountService
  ) { }


  ngOnInit(): void {
  }

}
