import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;


  constructor() {
    // NO es asyncrono
    // before render
    console.log('Constructor');
    console.log('-'.repeat(10));
    // setTimeout(() => {
    //   this.message = 'Hello, world!';
    // }, this.duration);
  }

  ngOnInit(): void {
    console.log("-DER ===========")
    // after render
    // only for the first time
    // run asyncs, then, subscribe to events, then, run the logic
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

    // set the interval to increment the counter every 1 second
    this.counterRef = window.setInterval(() => { // guarda el intervalo en counterRef
      console.log('run interval');  
      this.counter.update(statePrev => statePrev + 1); // incrementa el valor de la señal
    }, 1000);
  }

  ngOnDestroy(): void {
    // before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef); // limpia el intervalo de la señal que guardamos en counterRef
  }


  ngOnChanges(changes: SimpleChanges): void {
    // before render and during the life of the component 
    console.log("================================================")
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes); // show the changes in the input
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) { // si el valor actual es diferente al valor anterior
      this.metodoDePrueba(); // llama al metodo de prueba
    }

    console.log("============ REN-")
  }

 

  ngAfterViewInit(): void {
    // after render
    // verifica que el componente se haya renderizado y que los inputs se hayan cargado ademas de los hijos
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  metodoDePrueba() {
    console.log('MetodoDePrueba change duration ');
    console.log('-'.repeat(10));
  }

 

}
