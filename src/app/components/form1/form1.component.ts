import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class Form1Component implements OnInit {

  constructor(
    @Inject('Window') private window: Window,
  ) { }

  ngOnInit() {}
}
