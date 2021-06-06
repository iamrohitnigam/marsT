import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_service/user.service';

@Component({
  selector: 'app-usr-detail',
  templateUrl: './usr-detail.page.html',
  styleUrls: ['./usr-detail.page.scss'],
})
export class UsrDetailPage implements OnInit {

  public user: User;

  constructor(private router: Router) {
    if(this.router.getCurrentNavigation().extras.state == undefined)
    {
      this.router.navigate(['']);
    }
    this.user = this.router.getCurrentNavigation().extras.state.data; 
  }

  ngOnInit() {
  }


}
