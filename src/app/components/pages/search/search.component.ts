import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:string='';
  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.searchTerm= params.searchTerm;
    }
  );
}

  ngOnInit():void{

}
//making searchurl//
search(term: string): void {
  if (term) {
    this.router.navigateByUrl('/search/' + term);
  }
}

}
