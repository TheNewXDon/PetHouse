import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/Animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  @ViewChild('addform') addForm!: NgForm;
  animal: Animal = new Animal;
  name!: string;
  age!: number;
  kind!: string;
  owner!: string;
  phone!: string;
  imageUrl!: string;
  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.animal = new Animal;
  }

  onSavePet(form: NgForm) {
    this.animal.name = this.name;
    this.animal.age = this.age;
    this.animal.kind = this.kind;
    this.animal.owner = this.owner;
    this.animal.phone = this.phone;
    this.animal.imageUrl = this.imageUrl;

    this.animalService.saveAnimal(this.animal).subscribe(data => {
        console.log("DATA: " + form);
        

        console.log('dentro inserimento this.animal.id:' + this.animal.id);
        alert('Successful saving')
        this.router.navigate(["/"]);
      },
      error => {
        console.log(this.animal);
        alert("Impossible to save!");
      }
    )
  }

  onSubmit(){
    this.onSavePet(this.addForm);
  }

}
