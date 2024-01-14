import { Component, OnInit } from '@angular/core';
import { appLevelConstant } from 'src/app/shared/applevelconstant';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [appLevelConstant]
})
export class UserProfileComponent implements OnInit {
  userProfileImage = "https://randomuser.me/api/portraits/men/9.jpg";
  
  constructor(
    public appLevelConstant: appLevelConstant
  ) { }

  ngOnInit(): void {
  }

}
