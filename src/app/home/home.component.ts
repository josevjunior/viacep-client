import { Component, OnInit } from '@angular/core';
import { ViaCepService } from '../viacep/viacep.service';
import { ViaCepResponse } from '../viacep/viacep.response';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cep: string = '';
  public loading: boolean = false;
  public success: boolean = false;
  public error: boolean = false;
  public response: ViaCepResponse;

  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(public viacepService: ViaCepService) { }

  ngOnInit() {
  }

  search(){
    this.loading = true;
    this.success = false;
    this.response = null;
    this.error = false;

    this.viacepService
      .searchCep(this.cep)
      .subscribe((res) => {
        this.success = true;
        this.response = res;
      }, (err) => {
        this.error = true;
        this.loading = false;
      }, () => {
        this.loading = false;
      })
  }

  validarCep(){
    return (this.cep.replace(/[^0-9]/g, '').length == 8);
  }

}
