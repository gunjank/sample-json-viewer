import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  jsonObj = { "id": null, "message": "Success while Fetching record", "data": [{ "name": "Gunjan", "type": 
  "user", "isBase": false, "availableRecords": [{ "readyToDrop": false, "url":"" }]}]};
  jsonObjText = "";
  title = 'app';
  renderer:string="pretty";

  ngOnInit() {
    this.jsonObjText = JSON.stringify(this.jsonObj);
  }


  textChange(e: any) {
    try{
      this.jsonObj = JSON.parse(e);
    }catch(error){
      console.log("invalid json");
    }
  }
}
