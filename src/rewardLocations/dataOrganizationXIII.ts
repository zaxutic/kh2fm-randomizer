import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import {
	RewardLocation,
	RewardLocationName,
	RewardLocationType,
} from "./RewardLocation";

const larxeneExclude: Reward[] = [
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

export const dataOrganizationXIIIRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Power Boost (Data Xemnas)",
		value: "11CE0ADA",
		reward: Rewards.POWER_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.TWTNW,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Xigbar)",
		value: "11CE0AE6",
		reward: Rewards.DEFENSE_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.LAND_OF_DRAGONS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Xaldin)",
		value: "11CE0AC2",
		reward: Rewards.DEFENSE_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.BEASTS_CASTLE,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Vexen)",
		value: "11CE0A7A",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.HALLOWEEN_TOWN,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Lexaeus)",
		value: "11CE0A86",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.AGRABAH,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Zexion)",
		value: "11CE0A92",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.OLYMPUS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Saix)",
		value: "11CE0AF2",
		reward: Rewards.DEFENSE_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.PRIDE_LANDS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Magic Boost (Data Axel)",
		value: "11CE0ACE",
		reward: Rewards.MAGIC_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.TWILIGHT_TOWN,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "AP Boost (Data Demyx)",
		value: "11CE0AB6",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.HOLLOW_BASTION,
				exclude: Object.values(formRewards),
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "AP Boost (Data Luxord)",
		value: "11CE0AFE",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.PORT_ROYAL,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Marluxia)",
		value: "11CE0AAA",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.DISNEY_CASTLE,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Larxene)",
		value: "11CE0A9E",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.ATLANTICA,
				exclude: larxeneExclude,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.DATA_ORGANIZATION_XIII,
		description: "Magic Boost (Data Roxas)",
		value: "11CE0B0A",
		reward: Rewards.MAGIC_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: RewardLocationName.SIMULATED_TWILIGHT_TOWN,
			},
		},
	},
];
