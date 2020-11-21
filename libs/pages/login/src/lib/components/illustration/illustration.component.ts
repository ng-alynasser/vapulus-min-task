import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'vapulus-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationComponent implements OnInit {
  @HostBinding('class.login__illustration') loginIllustrationClass = true;
  constructor() {}

  ngOnInit(): void {}
}
