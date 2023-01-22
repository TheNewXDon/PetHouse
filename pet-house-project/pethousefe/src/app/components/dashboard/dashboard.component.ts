import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/Animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public animals!: Animal[];
  
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  public getAnimals(): void {
    this.animalService.getAnimals().subscribe(
      (response: Animal[]) => {
        this.animals = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  public searchAnimals(key: string): void {
    console.log(key);
    const results: Animal[] = [];
    for (const animal of this.animals) {
      if (animal.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || animal.owner.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(animal);
      }
    }
    this.animals = results;
    if (results.length === 0 || !key) {
      this.getAnimals();
    }
  } 

  /*public onOpenModal(animal: Animal, mode: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAnimalModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editAnimalModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteAnimalModal');
    }
    container!.appendChild(button);
    button.click();
  }*/

}
