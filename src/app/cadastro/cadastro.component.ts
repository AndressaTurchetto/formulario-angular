import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  formularioReactive!: FormGroup;

  constructor(private router: Router, private FormBuilder:FormBuilder) {
    this.formularioReactive = this.FormBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/\d{3}\.\d{3}\.\d{3}\-\d{2}/)]],
      cnpj: ['', [Validators.required, Validators.minLength(14), Validators.pattern(/\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]]
    });
   }

  ngOnInit(): void {
    this.formularioReactive = this.FormBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  cadastrar(): void {
    if (this.formularioReactive.valid) {
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário inválido');
    }
    console.log(this.formularioReactive.controls);
  }
}
