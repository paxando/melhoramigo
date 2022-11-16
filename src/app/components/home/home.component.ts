import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user$ = this.authService.currentUser$;

searchControl = new FormControl('');

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
