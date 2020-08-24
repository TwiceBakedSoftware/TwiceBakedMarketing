import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Output() public navToggle = new EventEmitter<void>();
    @Output() public darkModeChange = new EventEmitter<boolean>();
    @Input() public darkMode: boolean = false;
    constructor() {
    }

    darkToggle(): void {
        this.darkMode = !this.darkMode;
        this.darkModeChange.emit(this.darkMode);
    }
}
