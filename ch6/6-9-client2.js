import { acquireReading } from './6-9.js';

const reading = acquireReading();
const base = reading.baseCharge;

export const { taxableCharge } = reading;
