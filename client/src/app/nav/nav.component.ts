import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})

export class NavComponent {
    @Input() title: string | undefined;
    model: any = {};

    login() {
        console.log(this.model);
    }

}
