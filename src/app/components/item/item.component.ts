import { Component, OnInit, Input } from '@angular/core';
import { FetchMeService } from 'src/app/services/fetch-me.service';
import { Observable } from 'rxjs';
import { SearchItem } from 'src/app/services/itemModel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item : SearchItem

  constructor() { }

  ngOnInit() {
   
  }

}
