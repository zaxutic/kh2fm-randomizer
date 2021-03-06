import { GameMode, Leveling, RandomizingAction, Toggle } from "./enums";

export interface Settings {
	gameMode: GameMode;
	leveling: Leveling;
	abilities: RandomizingAction;
	stats: Toggle;
	bonusModifiers: Toggle;
	criticalMode: Toggle;
}

export const defaultSettings: Settings = {
	gameMode: GameMode.GOA_MOD,
	leveling: Leveling.LEVEL_FIFTY,
	abilities: RandomizingAction.RANDOMIZE,
	stats: Toggle.ON,
	bonusModifiers: Toggle.ON,
	criticalMode: Toggle.ON,
};
