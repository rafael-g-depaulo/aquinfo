export function consumoBanho(chuveiro, tempo): string {
  var time: number;
  time = tempo*chuveiro.waterPerMinute;
  return (time.toString());
}

export function ConsumoDescarga(custo, quantidade): number {
  var totalAgua: number;
  totalAgua = custo.totalWaterCost*quantidade;
  return (totalAgua);
}

export function gastoPorLitro(litros): string {
  litros = litros/1000;
  var totalSum = 0;
  if (litros > 45) {
    totalSum += (litros-45)*19.99;
    litros = 45;
  }
  if (litros > 30) {
    totalSum += (litros-30)*15.37;
    litros = 30;
  }
  if (litros > 20) {
    totalSum += (litros-20)*10.25;
    litros = 20;
  }
  if (litros > 13) {
    totalSum += (litros-13)*7.07;
    litros = 13;
  }
  if (litros > 7) {
    totalSum += (litros-7)*3.57;
    litros = 7;
  }
  if (litros > 0) {
    totalSum += litros*2.98;
  }
  
  return(totalSum.toFixed(2));
}