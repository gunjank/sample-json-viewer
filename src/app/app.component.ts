import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonObj = { "id": null, "message": "Success while Fetching record", "data": [{ "name": "Gunjan", "type": 
  "user", "isBase": false, "availableRecords": [{ "readyToDrop": false, "url":"" }]}]};
  jsonObjText = "";
  title = 'app';
  renderer:string="pretty";
  textChange(e: any) {
    try{
      this.jsonObj = JSON.parse(e);
    }catch(error){
      console.log("invalid json");
    }
  }
}
