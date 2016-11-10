import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yg-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  boxContainer;
  onCancel;

  constructor() {
    this.boxContainer = {
      ready: () => null,
      setHeader: () => null,
    };
    this.onCancel = () => null;
  }

  ngOnInit() {
  }

}
