import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FollowerService } from 'src/services/follower.service';
import { getDataSort } from 'src/app/shared/common-function';
import { appLevelConstant } from 'src/app/shared/applevelconstant';
@Component({
  selector: 'app-follower-details',
  templateUrl: './follower-details.component.html',
  styleUrls: ['./follower-details.component.scss'],
  providers: [appLevelConstant]
})
export class FollowerDetailsComponent implements OnInit {
  date = new Date();
  startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  endDate = new Date();
  selectedSortValue = 'total';
  results: any[];
  followerData: any[];
  req: { fromDate: Date; toDate: Date; };
  displayMess = "Loading...";
  loadingMess: string;
  upArrowImg = "assets/images/up-arrow-icon.png";
  downArrowImg = "assets/images/down-arrow-icon.png";

  constructor(
    private followerService: FollowerService,
    public appLevelConstant: appLevelConstant
  ) { }

  ngOnInit(): void {
    this.req = {
      fromDate: this.startDate,
      toDate: this.endDate,
    }
    this.getFollowersData(this.req);
  }

  getStartDate(value) {
    this.endDate = null;
    this.req = {
      fromDate: this.startDate,
      toDate: this.endDate,
    }
    if (this.startDate && this.endDate && value) {
      this.getFollowersData(this.req);
    }
  }

  getEndDate(value) {
    this.req = {
      fromDate: this.startDate,
      toDate: this.endDate,
    }
    if (this.startDate && this.endDate && value) {
      this.getFollowersData(this.req);
    }
  }

  getFollowersData(req) {
    this.displayMess = this.loadingMess;
    this.followerService.getFollowersData().subscribe(response => {
      if (response && response.length) {
        const finalData = [];
        const data = response;
        data.forEach(element => {
          element.total = element.twubric.total;
          element.friends = element.twubric.friends;
          element.influence = element.twubric.influence;
          element.chirpiness = element.twubric.chirpiness;
          const date = moment.unix(element.join_date)
          element.join_new_date = date.format("Do MMM YYYY");
          if (moment(req.fromDate) <= moment.unix(element.join_date) && moment.unix(element.join_date) <= moment(req.toDate)) {
            finalData.push(element);
          }
        });
        if (finalData && finalData.length) {
          this.followerData = finalData;
          this.results = this.followerData;
          this.getSortByValue('total');
        } else {
          this.followerData = [];
          this.results = [];
          this.displayMess = "No Record Found";
        }
      } else {
        this.results = [];
        this.displayMess = "No Record Found";
      }
    })
  }

  getSortByValue(value) {
    this.selectedSortValue = value;
    this.sortFollowerData('asc');
  }

  sortFollowerData(event) {
    const value = {
      value: this.selectedSortValue,
      key: event,
    }
    this.results = getDataSort(this.followerData, value);
  }

  removeFollowerData(removeValue) {
    const allData = this.results;
    const afterRemoveData = [];
    allData.forEach(element => {
      if (element.uid !== removeValue.uid) {
        afterRemoveData.push(element);
      }
    });
    if (afterRemoveData && afterRemoveData.length) {
      this.results = afterRemoveData;
      this.followerData = afterRemoveData;
    } else {
      this.results = [];
      this.followerData = [];
      this.displayMess = "No Record Found";
    }
  }

}
