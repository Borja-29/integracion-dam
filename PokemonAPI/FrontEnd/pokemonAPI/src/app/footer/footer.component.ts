import { Component } from "@angular/core";


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.components.css']
})
export class FooterComponent {
    public autor: any = {nombre:'Borja', apellido:'Díaz'};
}
