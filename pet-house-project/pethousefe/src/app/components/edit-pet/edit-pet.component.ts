import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/Animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  animal: Animal = new Animal();
  idAnimal: number = +this.route.snapshot.params['id'];
  constructor(private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animal = new Animal();
    console.log(this.idAnimal);
    this.loadAnimal(this.idAnimal);
    setTimeout(() => { console.log('Animal Id: ' + this.animal.id) }, 250);
    setTimeout(() => { console.log('Animal Name: ' + this.animal.name) }, 250);
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
    this.animalService.updateAnimal(this.animal).subscribe(data => {

    },
    error => console.log(error))
    
  }
}
