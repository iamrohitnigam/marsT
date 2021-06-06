import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AlertService } from '../_service/alert.service';
import { LoadingService } from '../_service/loading.service';
import { UserService, Users } from '../_service/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  users: Users;

  constructor(private userServ: UserService,
    public loadServ: LoadingService,
    private router:Router,
    private alertServ: AlertService) {
      this.getUsers();
     }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getUsers() {
    this.loadServ.loadingPresent();

    this.userServ.getUsers()
      .pipe(
        finalize(async () => {
          await this.loadServ.loadingDismiss();
        }))
      .subscribe(
        data => {
          console.log(data);
          this.users = data;
        },
        error => {
          this.alertServ.openSnackBar(error.message);
        });
  }

  getDetail(data)
  {
    this.router.navigate(['usr-detail'], { state: { data: data } });
  }

}
