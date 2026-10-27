import { equipmentRepository } from '../repositories/equipment.repository.js';
import { HttpError, notImplemented } from '../shared/http-error.js';

export async function createEquipment(input) {
  try {
    // MES 1 - TODO : construire les donnees metier :
    const {assetTag, name, category, dailyLateFeeCents} = input
    const assetTag_upper = assetTag.trim().toUpperCase()
    // assetTag nettoye et en majuscules, name nettoye,
    const result = await equipmentRepository.create({
      assetTag: assetTag_upper,
      name: name,
      category: category,
      dailyLateFeeCents: dailyLateFeeCents
    })
    return result;
    // category et dailyLateFeeCents conserves, isArchived force a false.
  } catch (error) {
    // FOURNI : la gestion technique de l'unicite n'est pas a reecrire.
    if (error.code === 11000 && error.keyPattern?.assetTag) {
      throw new HttpError(409, 'EQUIPMENT_ALREADY_EXISTS', 'Ce code existe deja.');
    }
  }
}
