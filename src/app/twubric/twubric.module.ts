import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwubricComponent } from './twubric.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FollowerDetailsComponent } from './follower-details/follower-details.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [TwubricComponent, UserProfileComponent, FollowerDetailsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class TwubricModule { }
 