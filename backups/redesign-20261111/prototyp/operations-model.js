// One explicit, fictional model shared by the inline and standalone demos.
export const scenario = Object.freeze({stock:210, dailyUse:10, plannedDay:12, seaDelay:10, portDelay:3, shipment:200, bridge:60, bridgeDay:18, customerDeadline:35});
export function calculate({sea=true, port=true, bridge=false}={}) {
  const s=scenario;
  const stockDays=s.stock/s.dailyUse;
  const arrival=s.plannedDay+(sea?s.seaDelay:0)+(port?s.portDelay:0);
  const bridgeOnTime=bridge&&s.bridgeDay<=stockDays;
  const cover=stockDays+(bridgeOnTime?s.bridge/s.dailyUse:0);
  return {stockDays,arrival,cover,gap:Math.max(0,arrival-cover),shortfall:Math.max(0,arrival-cover)*s.dailyUse,bridgeOnTime};
}
export function inventoryAt(day, options={}) {
  const r=calculate(options),s=scenario;
  // Process deliveries chronologically, including a bridge arriving after
  // the main shipment. Consumption pauses whenever the inventory is empty.
  const deliveries=[{day:r.arrival,amount:s.shipment}];
  if(options.bridge)deliveries.push({day:s.bridgeDay,amount:s.bridge});
  deliveries.sort((a,b)=>a.day-b.day);
  let inventory=s.stock,lastDay=0;
  for(const delivery of deliveries){
    if(delivery.day>day)break;
    inventory=Math.max(0,inventory-(delivery.day-lastDay)*s.dailyUse)+delivery.amount;
    lastDay=delivery.day;
  }
  return Math.max(0,inventory-(day-lastDay)*s.dailyUse);
}
