import { Component, OnInit } from '@angular/core';
import { CidadaoService } from '../services/cidadao.service';
import { Cidadao } from '../models/cidadao';

@Component({
  selector: 'app-cidadao',
  templateUrl: './cidadao.component.html',
  styleUrls: ['./cidadao.component.less']
})
export class CidadaoComponent implements OnInit {

  cidadao: Cidadao[] | null = null;
  dados: any;
  cadastro = {
    nome: "",
    idade: 0,
    sexo: "",
    id: ""
  }
  add: boolean = true
  id:string = "";
  constructor(private cidadaoservice: CidadaoService) { }

  ngOnInit(): void {
    this.cidadaoservice.cidadaos$?.subscribe(res=>{
      this.cidadao = res
    })
  }
 
  cadastrarCidadao(){
    this.cidadaoservice.addCidadao(this.cadastro);
    this.cadastro = {
      nome:'',
      idade:0,
      sexo:"",
      id: ""
    }
  }
  eliminar(dados:any){
    this.cidadaoservice.removeCidadao(dados.id)
  }
  editarPrepar(d:any){
     this.cadastro = {
      nome: d.nome,
      idade:d.idade,
      sexo:d.sexo,
      id: d.id
    }
    this.add = false
  }

  actualizar(){
    this.cidadaoservice.updateCidadao(this.cadastro);
    this.add = true;
    this.cadastro = {
      nome:'',
      idade:0,
      sexo:"",
      id: ""
    }
  }
 
}
