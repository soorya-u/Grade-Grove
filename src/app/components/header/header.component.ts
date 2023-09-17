import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  @ViewChild('dropdownContent') dropdownContent!: ElementRef;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onDocumentClick(event: Event) {
    if (
      !this.dropdownButton.nativeElement.contains(event.target) &&
      !this.dropdownContent.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }
}
