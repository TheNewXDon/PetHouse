import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/Animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-modify-pet',
  templateUrl: './modify-pet.component.html',
  styleUrls: ['./modify-pet.component.css']
})
export class ModifyPetComponent implements OnInit {
  animal: Animal = new Animal();
  @ViewChild('modifyform') addForm!: NgForm;
  /*name!: string;
  age!: number;
  kind!: string;
  owner!: string;
  phone!: string;
  imageUrl!: string;*/
  idAnimal: number = +this.route.snapshot.params['id'];
  constructor(private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animal = new Animal();
    console.log(this.idAnimal);
    this.loadAnimal(this.idAnimal);
  }

  loadAnimal(id: number){
    this.animalService.getAnimal(id).subscribe(
      (response: Animal) => {
      this.animal = response;
      console.log('animal', response);
    }, error => {

    }

    )
  }

  deleteAnimal() {
    if (confirm("Do you want to delete this pet?") == true) {
      this.animalService.deleteAnimal(this.animal.id).subscribe(
        response => {
          console.log('eliminato');
          console.log(response);
        }, error => {
          console.log(error);
        }
      )
      setTimeout(() =>{this.router.navigate(["/"])}, 500);
      
    }
  }

  updateAnimal() {
    /*this.animal.name = this.name;
    this.animal.age = this.age;
    this.animal.kind = this.kind;
    this.animal.owner = this.owner;
    this.animal.phone = this.phone;
    this.animal.imageUrl = this.imageUrl;*/

    this.animalService.updateAnimal(this.animal).subscribe(data => {

      alert("Successful modifing");
      this.router.navigate([`/edit/${this.animal.id}`]);
    },
    error => {
      console.log(error);
      alert("Error in process");
    })
    
  }

  onSubmit() {
    if (confirm("Do you really want to modify this pet?")) {
      this.updateAnimal;
    }
    
  }
}