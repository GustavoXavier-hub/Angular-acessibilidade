import { Directive, ElementRef, Output, EventEmitter, ContentChildren, QueryList, HostListener } from '@angular/core';

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagedItemDirective {

    @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void {
      switch (event.key) {
        case 'ArrowUp':
          console.log('up');
          this.moveFocus(ArrowDirection.RIGHT).focus();
          break;
        case 'ArrowDown':
          this.moveFocus(ArrowDirection.LEFT).focus();
          break;
        case 'ArrowLeft':
          this.moveFocus(ArrowDirection.LEFT).focus();
          break;
        case 'ArrowRight':
          this.moveFocus(ArrowDirection.RIGHT).focus();
          break;
      }
    }
    focus() {
        throw new Error('Method not implemented.');
    }
  
    public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
      const items = this.items.toArray();
      const curentSelectedIndex = items.findIndex(item => item.isFocused());
      const targetElementFocus = items[curentSelectedIndex + direction];
      if (targetElementFocus) {
        return targetElementFocus;
      }
  
      return direction === ArrowDirection.LEFT
        ? items[items.length - 1]
        : items[0];
    }
    isFocused(): unknown {
        throw new Error('Method not implemented.');
    }
  }
  
  enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
  }

