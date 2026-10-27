import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateLateFee } from '../src/services/late-fee.service.js';

test('49 heures de retard : trois jours factures', () => {
  // MES 3 - TODO A : Arrange, Act, Assert.
  // Echeance 2027-01-10T10:00:00Z, retour 2027-01-12T11:00:00Z.
  // Tarif 1000 centimes : verifier lateDays=3 et totalFeeCents=3000.
  assert.fail('MES 3 : ecrire le test nominal.');
});

test('retour exactement a echeance : aucun frais', () => {
  // MES 3 - TODO B : meme echeance et meme retour, tarif 1000.
  // Verifier lateDays=0 et totalFeeCents=0.
  assert.fail('MES 3 : ecrire le test du cas limite.');
});
