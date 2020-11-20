import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vapulus-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IllustrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
