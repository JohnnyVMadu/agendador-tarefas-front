import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PasswordField } from '../../shared/components/password-field/password-field';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PasswordField,
    ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.form = this.FormBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get fullNameErros(): string | null {
    const fullNameControl = this.form.get('fullName');
    if (fullNameControl?.hasError('required')) return 'O nome completo é um campo obrigatório.';
    if (fullNameControl?.hasError('minlength')) return 'Cadastre um nome com mais de 03 letras.';
    return null
  }

    get emailErros(): string | null {
    const emailControl = this.form.get('email');
    if (emailControl?.hasError('required')) return 'O cadastro do E-mail é obrigatório.';
    if (emailControl?.hasError('email')) return 'Este email é inválido.';
    return null
  }

  submit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    console.log("formulário submetido", this.form.value)
  }
}
