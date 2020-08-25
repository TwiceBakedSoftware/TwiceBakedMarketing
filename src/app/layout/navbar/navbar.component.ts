import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LocalStorageService } from '../../core/services/local-storage.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    @Output() public navToggle = new EventEmitter<void>();
    @Output() public darkModeChange = new EventEmitter<boolean>();

    private dark: boolean = false;
    @Input() public set darkMode(ev: boolean){
        this.dark = ev;
        this.darkModeChange.emit(ev);
    };

    public get darkMode() {
        return this.dark;
    }
    
    constructor(private mediaMatcher: MediaMatcher, private storageService: LocalStorageService) {
    }

    ngOnInit() {
        const saved = this.storageService.retrieveLocalStorage<string>('dark-mode');
        console.log(saved);
        switch (saved) {
            case 'light':
                this.darkMode = false;
                break;
            case 'dark':
                this.darkMode = true;
                break;
            default:
                const prefersDark = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches;
                const prefersLight = this.mediaMatcher.matchMedia('(prefers-color-scheme: light)').matches;
                this.storageService.setLocalStorage(
                    'dark-mode',
                    prefersDark
                    ? 'dark'
                    : prefersLight
                      ? 'light'
                      : 'unknown');
                this.darkMode = prefersDark;
                break;
        }
    }

    darkToggle(): void {
        this.darkMode = !this.darkMode;
        if (this.darkMode) {
            this.storageService.setLocalStorage('dark-mode', 'dark');
        } else {
            this.storageService.setLocalStorage('dark-mode', 'light');
        }
    }
}
