import { Rewards } from "../rewards";
import {
	RewardLocation,
	RewardLocationName,
	RewardLocationType,
} from "./RewardLocation";

export const criticalRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 1",
		value: "11D18DDE",
		reward: Rewards.REACTION_BOOST,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 2",
		value: "11D18DDC",
		reward: Rewards.FINISHING_PLUS,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 3",
		value: "11D18DE8",
		reward: Rewards.DRAW,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 4",
		value: "11D18DE4",
		reward: Rewards.LUCKY_LUCKY,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 5",
		value: "11D18DE6",
		reward: Rewards.LUCKY_LUCKY,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 6",
		value: "11D18DE0",
		reward: Rewards.MP_HASTERA,
	},
	{
		type: RewardLocationType.CRITICAL,
		name: RewardLocationName.CRITICAL,
		description: "Bonus 7",
		value: "11D18DE2",
		reward: Rewards.NO_EXPERIENCE,
	},
];
