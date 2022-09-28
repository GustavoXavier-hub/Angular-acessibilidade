import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import  * as uuid from 'uuid';
@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(( ) => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label: string = '';
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange =(value: string) => {};
  public onTouched = () => {};

  constructor() {
    this.id = `-${uuid.v1()}´;
   }

  public writeValue(value: string): void {
   this.value =value;
   this.onChange(this.value);
   this.valueChange.emit(this.value);
  }
  public registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void):  void {
   this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
 
  ngOnInit(): void {
  }

  public activate(value: string): void{
  this.writeValue(value);
  }

}

enum YesNoButtonGroupOptions {
YES ='yes',
NO = 'no'
}
