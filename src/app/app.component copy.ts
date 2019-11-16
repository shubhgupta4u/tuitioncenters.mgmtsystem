import { Component ,OnInit} from '@angular/core';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'tuition-mgmt-system';

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.apiClientService.get("api/Comment").subscribe((data)=>{
      console.log(data);
    },error=>{
      console.error(error);
    });
    this.apiClientService.get("api/Hello").subscribe((data)=>{
      console.log(data);
    },error=>{
      console.error(error);
    });
    this.apiClientService.get("").subscribe((data)=>{
      console.log(data);
    },error=>{
      console.error(error);
    })
  }

}
