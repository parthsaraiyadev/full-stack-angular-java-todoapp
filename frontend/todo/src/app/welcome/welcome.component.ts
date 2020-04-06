import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  messageFromService: string
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service : WelcomeDataService) {

   }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getPathVariableMessage(){
    this.service.executePathVariableService(this.name).subscribe(

      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)

    );
  }

  handleSuccessResponse(response){
    this.messageFromService = response.message
  }

  handleErrorResponse(error){
    this.messageFromService = error.error.message
  }

}
