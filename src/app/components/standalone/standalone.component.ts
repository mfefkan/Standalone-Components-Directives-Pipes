import { Component } from '@angular/core';
import { Standalone2Component } from "../standalone2/standalone2.component";
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'app-standalone',
    templateUrl: './standalone.component.html',
    styleUrls: ['./standalone.component.scss'],
    standalone: true,
    imports: [FormsModule,NgIf,Standalone2Component,CommonModule]

    //Burada htmlde kullandığımız ngIf'i import etmezsek hata alırız.
    //Ya da CommonModule import ederekde bütün ekleri kullanabiliriz. Bunu kullandığımızda ekstra ngIf belirtmeye gerek kalamayacak.Directive ve pipe konusunda bu müthiş bir kolaylık.
})
export class StandaloneComponent {
data : any;
}
