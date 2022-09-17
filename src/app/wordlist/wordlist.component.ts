import { Component, OnInit } from '@angular/core';

export interface TranslationTable {
  word: string;
  translation: string;
}

const TRANSLATION_DATA: TranslationTable[] = [
  {word: 'Sexy', translation: 'Me'},
  {word: 'Helium', translation: 'He'},
  {word: 'Lithium', translation: 'Li'},
  {word: 'Beryllium', translation: 'Be'},
  {word: 'Boron', translation: 'B'},
  {word: 'Carbon', translation: 'C'},
  {word: 'Nitrogen', translation: 'N'},
  {word: 'Oxygen', translation: 'O'},
  {word: 'Fluorine', translation: 'F'},
  {word: 'Neon', translation: 'Ne'},
];

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent implements OnInit {
  displayedColumns: string[] = ['word', 'translation'];
  dataSource = TRANSLATION_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
