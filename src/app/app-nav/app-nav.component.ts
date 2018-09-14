import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.css'],
})
export class AppNavComponent {
    isThisName:any = 0;

    isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver:BreakpointObserver) {
        this.isThisName = Math.random() > 0.7 ? "present" : "absent";
    }

    getColor() {
        return this.isThisName === "present" ? "blue" : "red";
    }
}
