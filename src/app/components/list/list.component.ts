import { Component, OnInit } from '@angular/core';
import { FetchMeService } from 'src/app/services/fetch-me.service';
import { SearchItem } from 'src/app/services/itemModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private results:SearchItem[]=[];
  private tempResults:SearchItem[]=[];
  private searchTerm:string="";
  public categories: string[]=[];

 
  constructor(private fetchService: FetchMeService) { }

  ngOnInit() {
    this.fetchService.getNews().subscribe(
      res=>{
        this.results=res; 
        this.tempResults= this.results;
        this.getCategories()
    
      },error=>{
       alert(error)
     }
     );
  }

  filterCategories(filterVal: string) {
    if (filterVal == "0")
        this.tempResults = this.results;
    else
        this.tempResults = this.tempResults.filter((item) => item.category == filterVal);
}

  getCategories(){
    const selectedIds= this.results.map(({ category }) => category)
    this.categories  = [... new Set(selectedIds)]
    console.log(this.categories);

  }

  search(){
    if(this.searchTerm===""){
      this.tempResults= this.results
    }else{
    this.tempResults= this.results.filter(x => x.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }}

}
