import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent {
  form!: FormGroup;
  tokens: { id: number; value: string }[] = [];
  displayedColumns = ['id', 'value'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      length: [12, [Validators.required, Validators.min(1)]],
    });
  }

  generateToken() {
    if (!this.form) return;

    const length = this.form.get('length')?.value;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    this.snackBar.open(`Token generated: ${result}`, 'Dismiss', {
      duration: 3000,
      panelClass: ['mat-snack-bar-center'],
    });
    this.tokens.push({ id: this.tokens.length + 1, value: result });
  }
}
