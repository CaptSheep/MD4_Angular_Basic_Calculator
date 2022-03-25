import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  v
  constructor() { }

  ngOnInit() {
  }
popUp(x:number) {
  
  (document.getElementById('result') as HTMLInputElement) .value += x;
}

 calculate() {
   let equation = (document.getElementById('result') as HTMLInputElement).value;
   (document.getElementById('result') as HTMLInputElement).value = eval(equation);
}
reset() {

  (document.getElementById('result') as HTMLInputElement).value = '';

}

}
