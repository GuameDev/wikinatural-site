import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characterService/character.service';
import { Character } from '../../models/character.model';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  characters?: Character[];
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAllCharacters()
  }


  getAllCharacters() {
    this.characterService.getAllCharacters().subscribe({
      next:(data) => {
        this.characters = data.data;
      },
      error: (e) => console.error(e)
    })
  }
}
