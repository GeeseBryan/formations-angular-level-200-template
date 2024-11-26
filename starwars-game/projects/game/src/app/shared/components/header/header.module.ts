import { NgModule } from "@angular/core";
import { AppComponent } from "../../../app.component";
import { HeaderComponent } from "./header.component";
import { SearchComponent } from "search";

@NgModule({
    declarations: [ HeaderComponent ],
    imports: [ SearchComponent ],
    exports: [ HeaderComponent ],
    providers: [],
    })

export class HeaderModule { }
