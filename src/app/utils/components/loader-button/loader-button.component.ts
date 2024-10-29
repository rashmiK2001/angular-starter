import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader-button',
  templateUrl: './loader-button.component.html',
  styleUrl: './loader-button.component.scss'
})
export class LoaderButtonComponent {

  @Input() loading: boolean = false
  @Input() disabled: boolean = false
  @Input() buttonText: string = 'Submit'
  @Input() loadingText: string = 'Loading...'
  @Input() theme: string = 'primary'
  @Input() btnType: string = 'btn'
  @Input() btnClass: string = ''

  @Output() onClick = new EventEmitter()


  onClickBtn() {
    this.onClick.next(1)
  }
}
