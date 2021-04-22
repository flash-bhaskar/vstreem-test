import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){
}
 
  test(){
    console.log("start");
    this.http.post
    ("http://3.129.148.62/account/update-password",{
      password:"Bhaskar360",
      newpassword:"Bhaskar063"
    },{
      headers:new HttpHeaders().set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYWNjZXNzIiwicmVnaXN0YXJ0aW9uIl0sInVzZXJfbmFtZSI6ImJoYXNrYXIiLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXSwiZXhwIjoxNjE4OTY1MzA0LCJhdXRob3JpdGllcyI6WyJ1cGRhdGVfcHJvZmlsZSIsInJlYWRfcHJvZmlsZSJdLCJqdGkiOiIxYzA4MDc0Ny1mZjVlLTQwNjktYjhmMi00MmZmNThhYWM0MWYiLCJlbWFpbCI6ImJoYXNrYXJhczE5OTlAZ21haWwuY29tIiwiY2xpZW50X2lkIjoibW9iaWxlIiwicmVzb3VyY2VpZHMiOlsiYWNjZXNzIiwicmVnaXN0YXJ0aW9uIl19.wkPMGJhG5xSL3hdXWf0l5uqZ_XHWtaHFEjycZL6UNNE")
    }
    ).subscribe(responseData=>console.log(responseData),
    error =>console.log(error)
  ); 
  }


}
