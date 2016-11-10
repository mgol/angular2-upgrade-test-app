import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yg-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent implements OnInit {
  title: String = 'yg app title, version 5';

  constructor() { }

  ngOnInit() {
  }

}
