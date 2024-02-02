import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input({ required: true }) character!: Character;

}
