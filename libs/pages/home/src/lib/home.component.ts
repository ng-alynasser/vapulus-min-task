import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostBinding('class.homepage') homepageClass = true;
  constructor() {}

  ngOnInit(): void {}
}
