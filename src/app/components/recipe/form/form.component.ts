import { Component } from "@angular/core";

@Component({
    selector:"app-form",
    templateUrl:"./form.component.html",
    styleUrls:["./form.component.css"]

})
export class FormComponent{
    isActive=false
    isNotActive=true
    recipes: string[] = [];
        onClick(){
       this.isActive=!this.isActive;
       this.isNotActive=!this.isNotActive;
    }
    onsave(){
   const c= document.getElementById("in1")
    this.recipes.push("c")
    }

}