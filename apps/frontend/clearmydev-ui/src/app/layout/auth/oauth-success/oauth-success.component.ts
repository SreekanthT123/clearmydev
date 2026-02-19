import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-oauth-success',
  imports: [],
  templateUrl: './oauth-success.component.html',
  styleUrl: './oauth-success.component.css'
})
export class OauthSuccessComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router: Router, private auth: AuthService){}

  ngOnInit(){
    const token = this.route.snapshot.queryParamMap.get('token');
    if(token){
      this.auth.login(token);
      this.router.navigate(['/layout'])
    }
    else{
      this.router.navigate(['/'])
    }
  }
}
