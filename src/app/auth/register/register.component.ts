import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formSubmited = false;

  registerForm = this.fb.group(
    {
      nombre: ['Jesus', Validators.required],
      email: ['test100@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
      password2: ['123456', Validators.required],
      terminos: [true, Validators.required],
    },
    {
      validators: this.passwordsIguales('password', 'password2'),
    }
  );

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  crearUsario() {
    this.formSubmited = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Realizar la creacion

    this.usuarioService.crearUsario(this.registerForm.value).subscribe({
      next: (resp) => {
        // Navegar al Dashboard
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        {
          Swal.fire('Error', err.error.msg, 'error');
        }
      },
    });
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }
  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmited;
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }
    };
  }
}
