import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  faCaretDown = faCaretDown;

  constructor(private router: Router) {}

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

  checkDropdown() {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  subRouting(event: any) {
    let element = event.target || event.srcElement || event.currentTarget;
    let elementId = element.id;

    this.router
      .navigate(['/result', elementId], { relativeTo: null, onSameUrlNavigation: 'reload' })

    this.toggleDropdown();
  }
}
