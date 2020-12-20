import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ManipularDadosObjetosService {
  constructor() { }
  retornarNumerosAleatorios(numeroInicial: number, numeroFinal: number, quantidade: number, podeRepetir: boolean): Array<number>{
  const numerosAleatorios = new Array<number>();
  while (numerosAleatorios.length < quantidade) {
        const numeroAleatoriaGerado = Math.floor(Math.random() * (numeroFinal - numeroInicial) + numeroInicial);
        if (podeRepetir === true) {
          numerosAleatorios.push(numeroAleatoriaGerado);
        } else {
          if (!numerosAleatorios.includes(numeroAleatoriaGerado)){
            numerosAleatorios.push(numeroAleatoriaGerado);
          }
        }
  }
  return numerosAleatorios;
  }
  retornarArrayTamanhoVetor(array: Array<any>): Array<number> {
      const arrayPosicoes = new Array<number> ();
      for (let i = 0; i < array.length; i++) {
          arrayPosicoes.push(i);
      }
      return arrayPosicoes;
  }
  converterParaBRL(precoOriginal: string): string {
      const precoCorrigido = `R${precoOriginal.replace('.', ',')}`;
      return precoCorrigido;
        }
}
