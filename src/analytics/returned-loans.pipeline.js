import { notImplemented } from '../shared/http-error.js';

export function buildReturnedLoansPipeline() {
  // MES 2 : retirer l'echec provisoire et completer les quatre TODO ci-dessous.
  // La jointure, son unwind et le tri final sont fournis.
  return [
    {  /* TODO 1 : status RETURNED */ },
    { $lookup: { from: 'equipments', localField: 'equipmentId', foreignField: '_id', as: 'equipment' } },
    { $unwind: '$equipment' },
    { $match: {isArchived: false}   /* TODO 2 : equipment.isArchived false */ },
    { /* TODO 3 : categorie, returnedCount et averageDurationDays */ },
    { /* TODO 4 : category, returnedCount, moyenne arrondie, sans _id */ },
    { $sort: { category: 1 } },
  ];
}
