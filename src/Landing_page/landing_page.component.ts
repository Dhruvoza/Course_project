import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'landing-app',
    templateUrl: './landing_page.component.html',
    styleUrls: []
})

export class LandingComponent{
    header: string = "landing";

    constructor(private router: Router){}

    handleLogout() {
        localStorage.removeItem('userData');
        this.router.navigate(['login']);
    }
}