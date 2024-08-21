import { MonthlyHealth } from './MonthlyHealth';
import { MonthlySafety } from './MonthlySafety';
import { MonthlyEnergy } from './MonthlyEnergy';
import { MonthlyMaterial } from './MonthlyMaterial';
import { MonthlyWaste } from './MonthlyWaste';


export interface MonthlyReport {
    werk: string;
    month: number;
    year: number;
    health: MonthlyHealth;
    safety: MonthlySafety;
    energy: MonthlyEnergy;
    material: MonthlyMaterial;
    waste: MonthlyWaste;
}