import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";

export interface Level {
	level: number;
	stats: string;
	doubleIncrease?: boolean;
	abilities: {
		sword: { value: string; reward?: Reward };
		shield: { value: string; reward?: Reward };
		staff: { value: string; reward?: Reward };
	};
}

export const levels: Level[] = [
	{
		level: 2,
		stats: "21D0B6BC",
		abilities: {
			sword: { value: "11D0B6C0" },
			shield: { value: "11D0B6C2" },
			staff: { value: "11D0B6C4" },
		},
	},
	{
		level: 3,
		stats: "21D0B6CC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B6D0" },
			shield: { value: "11D0B6D2" },
			staff: { value: "11D0B6D4" },
		},
	},
	{
		level: 4,
		stats: "21D0B6DC",
		abilities: {
			sword: { value: "11D0B6E0" },
			shield: { value: "11D0B6E2" },
			staff: { value: "11D0B6E4" },
		},
	},
	{
		level: 5,
		stats: "21D0B6EC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B6F0" },
			shield: { value: "11D0B6F2" },
			staff: { value: "11D0B6F4" },
		},
	},
	{
		level: 6,
		stats: "21D0B6FC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B700" },
			shield: { value: "11D0B702" },
			staff: { value: "11D0B704" },
		},
	},
	{
		level: 7,
		stats: "21D0B70C",
		abilities: {
			sword: {
				value: "11D0B710",
				reward: Rewards.COMBO_BOOST,
			},
			shield: {
				value: "11D0B712",
				reward: Rewards.ITEM_BOOST,
			},
			staff: {
				value: "11D0B714",
				reward: Rewards.EXPERIENCE_BOOST,
			},
		},
	},
	{
		level: 8,
		stats: "21D0B71C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B720" },
			shield: { value: "11D0B722" },
			staff: { value: "11D0B724" },
		},
	},
	{
		level: 9,
		stats: "21D0B72C",
		abilities: {
			sword: {
				value: "11D0B730",
				reward: Rewards.EXPERIENCE_BOOST,
			},
			shield: {
				value: "11D0B732",
				reward: Rewards.COMBO_BOOST,
			},
			staff: {
				value: "11D0B734",
				reward: Rewards.ITEM_BOOST,
			},
		},
	},
	{
		level: 10,
		stats: "21D0B73C",
		abilities: {
			sword: { value: "11D0B740" },
			shield: { value: "11D0B742" },
			staff: { value: "11D0B744" },
		},
	},
	{
		level: 11,
		stats: "21D0B74C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B750" },
			shield: { value: "11D0B752" },
			staff: { value: "11D0B754" },
		},
	},
	{
		level: 12,
		stats: "21D0B75C",
		abilities: {
			sword: {
				value: "11D0B760",
				reward: Rewards.MAGIC_LOCK_ON,
			},
			shield: {
				value: "11D0B762",
				reward: Rewards.MAGIC_LOCK_ON,
			},
			staff: {
				value: "11D0B764",
				reward: Rewards.MAGIC_LOCK_ON,
			},
		},
	},
	{
		level: 13,
		stats: "21D0B76C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B770" },
			shield: { value: "11D0B772" },
			staff: { value: "11D0B774" },
		},
	},
	{
		level: 14,
		stats: "21D0B77C",
		abilities: {
			sword: { value: "11D0B780" },
			shield: { value: "11D0B782" },
			staff: { value: "11D0B784" },
		},
	},
	{
		level: 15,
		stats: "21D0B78C",
		abilities: {
			sword: {
				value: "11D0B790",
				reward: Rewards.REACTION_BOOST,
			},
			shield: {
				value: "11D0B792",
				reward: Rewards.DAMAGE_DRIVE,
			},
			staff: {
				value: "11D0B794",
				reward: Rewards.FIRE_BOOST,
			},
		},
	},
	{
		level: 16,
		stats: "21D0B79C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B7A0" },
			shield: { value: "11D0B7A2" },
			staff: { value: "11D0B7A4" },
		},
	},
	{
		level: 17,
		stats: "21D0B7AC",
		abilities: {
			sword: {
				value: "11D0B7B0",
				reward: Rewards.ITEM_BOOST,
			},
			shield: {
				value: "11D0B7B2",
				reward: Rewards.EXPERIENCE_BOOST,
			},
			staff: {
				value: "11D0B7B4",
				reward: Rewards.COMBO_BOOST,
			},
		},
	},
	{
		level: 18,
		stats: "21D0B7BC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B7C0" },
			shield: { value: "11D0B7C2" },
			staff: { value: "11D0B7C4" },
		},
	},
	{
		level: 19,
		stats: "21D0B7CC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B7D0" },
			shield: { value: "11D0B7D2" },
			staff: { value: "11D0B7D4" },
		},
	},
	{
		level: 20,
		stats: "21D0B7DC",
		abilities: {
			sword: {
				value: "11D0B7E0",
				reward: Rewards.LEAF_BRACER,
			},
			shield: {
				value: "11D0B7E2",
				reward: Rewards.LEAF_BRACER,
			},
			staff: {
				value: "11D0B7E4",
				reward: Rewards.LEAF_BRACER,
			},
		},
	},
	{
		level: 21,
		stats: "21D0B7EC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B7F0" },
			shield: { value: "11D0B7F2" },
			staff: { value: "11D0B7F4" },
		},
	},
	{
		level: 22,
		stats: "21D0B7FC",
		abilities: {
			sword: { value: "11D0B800" },
			shield: { value: "11D0B802" },
			staff: { value: "11D0B804" },
		},
	},
	{
		level: 23,
		stats: "21D0B80C",
		abilities: {
			sword: {
				value: "11D0B810",
				reward: Rewards.FIRE_BOOST,
			},
			shield: {
				value: "11D0B812",
				reward: Rewards.REACTION_BOOST,
			},
			staff: {
				value: "11D0B814",
				reward: Rewards.DAMAGE_DRIVE,
			},
		},
	},
	{
		level: 24,
		stats: "21D0B81C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B820" },
			shield: { value: "11D0B822" },
			staff: { value: "11D0B824" },
		},
	},
	{
		level: 25,
		stats: "21D0B82C",
		abilities: {
			sword: {
				value: "11D0B830",
				reward: Rewards.DRIVE_BOOST,
			},
			shield: {
				value: "11D0B832",
				reward: Rewards.ONCE_MORE,
			},
			staff: {
				value: "11D0B834",
				reward: Rewards.DRAW,
			},
		},
	},
	{
		level: 26,
		stats: "21D0B83C",
		abilities: {
			sword: { value: "11D0B840" },
			shield: { value: "11D0B842" },
			staff: { value: "11D0B844" },
		},
	},
	{
		level: 27,
		stats: "21D0B84C",
		abilities: {
			sword: { value: "11D0B850" },
			shield: { value: "11D0B852" },
			staff: { value: "11D0B854" },
		},
	},
	{
		level: 28,
		stats: "21D0B85C",
		abilities: {
			sword: {
				value: "11D0B860",
				reward: Rewards.DRAW,
			},
			shield: {
				value: "11D0B862",
				reward: Rewards.DRIVE_BOOST,
			},
			staff: {
				value: "11D0B864",
				reward: Rewards.ONCE_MORE,
			},
		},
	},
	{
		level: 29,
		stats: "21D0B86C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B870" },
			shield: { value: "11D0B872" },
			staff: { value: "11D0B874" },
		},
	},
	{
		level: 30,
		stats: "21D0B87C",
		abilities: {
			sword: { value: "11D0B880" },
			shield: { value: "11D0B882" },
			staff: { value: "11D0B884" },
		},
	},
	{
		level: 31,
		stats: "21D0B88C",
		abilities: {
			sword: {
				value: "11D0B890",
				reward: Rewards.COMBINATION_BOOST,
			},
			shield: {
				value: "11D0B892",
				reward: Rewards.DEFENDER,
			},
			staff: {
				value: "11D0B894",
				reward: Rewards.BLIZZARD_BOOST,
			},
		},
	},
	{
		level: 32,
		stats: "21D0B89C",
		abilities: {
			sword: { value: "11D0B8A0" },
			shield: { value: "11D0B8A2" },
			staff: { value: "11D0B8A4" },
		},
	},
	{
		level: 33,
		stats: "21D0B8AC",
		abilities: {
			sword: {
				value: "11D0B8B0",
				reward: Rewards.DAMAGE_DRIVE,
			},
			shield: {
				value: "11D0B8B2",
				reward: Rewards.FIRE_BOOST,
			},
			staff: {
				value: "11D0B8B4",
				reward: Rewards.REACTION_BOOST,
			},
		},
	},
	{
		level: 34,
		stats: "21D0B8BC",
		abilities: {
			sword: { value: "11D0B8C0" },
			shield: { value: "11D0B8C2" },
			staff: { value: "11D0B8C4" },
		},
	},
	{
		level: 35,
		stats: "21D0B8CC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B8D0" },
			shield: { value: "11D0B8D2" },
			staff: { value: "11D0B8D4" },
		},
	},
	{
		level: 36,
		stats: "21D0B8DC",
		abilities: {
			sword: {
				value: "11D0B8E0",
				reward: Rewards.AIR_COMBO_BOOST,
			},
			shield: {
				value: "11D0B8E2",
				reward: Rewards.JACKPOT,
			},
			staff: {
				value: "11D0B8E4",
				reward: Rewards.NEGATIVE_COMBO,
			},
		},
	},
	{
		level: 37,
		stats: "21D0B8EC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B8F0" },
			shield: { value: "11D0B8F2" },
			staff: { value: "11D0B8F4" },
		},
	},
	{
		level: 38,
		stats: "21D0B8FC",
		abilities: {
			sword: { value: "11D0B900" },
			shield: { value: "11D0B902" },
			staff: { value: "11D0B904" },
		},
	},
	{
		level: 39,
		stats: "21D0B90C",
		abilities: {
			sword: {
				value: "11D0B910",
				reward: Rewards.BLIZZARD_BOOST,
			},
			shield: {
				value: "11D0B912",
				reward: Rewards.COMBINATION_BOOST,
			},
			staff: {
				value: "11D0B914",
				reward: Rewards.DEFENDER,
			},
		},
	},
	{
		level: 40,
		stats: "21D0B91C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B920" },
			shield: { value: "11D0B922" },
			staff: { value: "11D0B924" },
		},
	},
	{
		level: 41,
		stats: "21D0B92C",
		abilities: {
			sword: {
				value: "11D0B930",
				reward: Rewards.DRIVE_CONVERTER,
			},
			shield: {
				value: "11D0B932",
				reward: Rewards.DAMAGE_CONTROL,
			},
			staff: {
				value: "11D0B934",
				reward: Rewards.THUNDER_BOOST,
			},
		},
	},
	{
		level: 42,
		stats: "21D0B93C",
		abilities: {
			sword: { value: "11D0B940" },
			shield: { value: "11D0B942" },
			staff: { value: "11D0B944" },
		},
	},
	{
		level: 43,
		stats: "21D0B94C",
		abilities: {
			sword: { value: "11D0B950" },
			shield: { value: "11D0B952" },
			staff: { value: "11D0B954" },
		},
	},
	{
		level: 44,
		stats: "21D0B95C",
		abilities: {
			sword: {
				value: "11D0B960",
				reward: Rewards.NEGATIVE_COMBO,
			},
			shield: {
				value: "11D0B962",
				reward: Rewards.AIR_COMBO_BOOST,
			},
			staff: {
				value: "11D0B964",
				reward: Rewards.JACKPOT,
			},
		},
	},
	{
		level: 45,
		stats: "21D0B96C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B970" },
			shield: { value: "11D0B972" },
			staff: { value: "11D0B974" },
		},
	},
	{
		level: 46,
		stats: "21D0B97C",
		abilities: {
			sword: { value: "11D0B980" },
			shield: { value: "11D0B982" },
			staff: { value: "11D0B984" },
		},
	},
	{
		level: 47,
		stats: "21D0B98C",
		abilities: {
			sword: {
				value: "11D0B990",
				reward: Rewards.ONCE_MORE,
			},
			shield: {
				value: "11D0B992",
				reward: Rewards.DRAW,
			},
			staff: {
				value: "11D0B994",
				reward: Rewards.DRIVE_BOOST,
			},
		},
	},
	{
		level: 48,
		stats: "21D0B99C",
		abilities: {
			sword: { value: "11D0B9A0" },
			shield: { value: "11D0B9A2" },
			staff: { value: "11D0B9A4" },
		},
	},
	{
		level: 49,
		stats: "21D0B9AC",
		abilities: {
			sword: {
				value: "11D0B9B0",
				reward: Rewards.FINISHING_PLUS,
			},
			shield: {
				value: "11D0B9B2",
				reward: Rewards.SECOND_CHANCE,
			},
			staff: {
				value: "11D0B9B4",
				reward: Rewards.BERSERK_CHARGE,
			},
		},
	},
	{
		level: 50,
		stats: "21D0B9BC",
		abilities: {
			sword: { value: "11D0B9C0" },
			shield: { value: "11D0B9C2" },
			staff: { value: "11D0B9C4" },
		},
	},
	{
		level: 51,
		stats: "21D0B9CC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0B9D0" },
			shield: { value: "11D0B9D2" },
			staff: { value: "11D0B9D4" },
		},
	},
	{
		level: 52,
		stats: "21D0B9DC",
		abilities: {
			sword: { value: "11D0B9E0" },
			shield: { value: "11D0B9E2" },
			staff: { value: "11D0B9E4" },
		},
	},
	{
		level: 53,
		stats: "21D0B9EC",
		abilities: {
			sword: {
				value: "11D0B9F0",
				reward: Rewards.THUNDER_BOOST,
			},
			shield: {
				value: "11D0B9F2",
				reward: Rewards.DRIVE_CONVERTER,
			},
			staff: {
				value: "11D0B9F4",
				reward: Rewards.DAMAGE_CONTROL,
			},
		},
	},
	{
		level: 54,
		stats: "21D0B9FC",
		abilities: {
			sword: { value: "11D0BA00" },
			shield: { value: "11D0BA02" },
			staff: { value: "11D0BA04" },
		},
	},
	{
		level: 55,
		stats: "21D0BA0C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BA10" },
			shield: { value: "11D0BA12" },
			staff: { value: "11D0BA14" },
		},
	},
	{
		level: 56,
		stats: "21D0BA1C",
		abilities: {
			sword: { value: "11D0BA20" },
			shield: { value: "11D0BA22" },
			staff: { value: "11D0BA24" },
		},
	},
	{
		level: 57,
		stats: "21D0BA2C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BA30" },
			shield: { value: "11D0BA32" },
			staff: { value: "11D0BA34" },
		},
	},
	{
		level: 58,
		stats: "21D0BA3C",
		abilities: {
			sword: { value: "11D0BA40" },
			shield: { value: "11D0BA42" },
			staff: { value: "11D0BA44" },
		},
	},
	{
		level: 59,
		stats: "21D0BA4C",
		abilities: {
			sword: {
				value: "11D0BA50",
				reward: Rewards.DEFENDER,
			},
			shield: {
				value: "11D0BA52",
				reward: Rewards.BLIZZARD_BOOST,
			},
			staff: {
				value: "11D0BA54",
				reward: Rewards.COMBINATION_BOOST,
			},
		},
	},
	{
		level: 60,
		stats: "21D0BA5C",
		abilities: {
			sword: { value: "11D0BA60" },
			shield: { value: "11D0BA62" },
			staff: { value: "11D0BA64" },
		},
	},
	{
		level: 61,
		stats: "21D0BA6C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BA70" },
			shield: { value: "11D0BA72" },
			staff: { value: "11D0BA74" },
		},
	},
	{
		level: 62,
		stats: "21D0BA7C",
		abilities: {
			sword: { value: "11D0BA80" },
			shield: { value: "11D0BA82" },
			staff: { value: "11D0BA84" },
		},
	},
	{
		level: 63,
		stats: "21D0BA8C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BA90" },
			shield: { value: "11D0BA92" },
			staff: { value: "11D0BA94" },
		},
	},
	{
		level: 64,
		stats: "21D0BA9C",
		abilities: {
			sword: { value: "11D0BAA0" },
			shield: { value: "11D0BAA2" },
			staff: { value: "11D0BAA4" },
		},
	},
	{
		level: 65,
		stats: "21D0BAAC",
		abilities: {
			sword: {
				value: "11D0BAB0",
				reward: Rewards.BERSERK_CHARGE,
			},
			shield: {
				value: "11D0BAB2",
				reward: Rewards.FINISHING_PLUS,
			},
			staff: {
				value: "11D0BAB4",
				reward: Rewards.SECOND_CHANCE,
			},
		},
	},
	{
		level: 66,
		stats: "21D0BABC",
		abilities: {
			sword: { value: "11D0BAC0" },
			shield: { value: "11D0BAC2" },
			staff: { value: "11D0BAC4" },
		},
	},
	{
		level: 67,
		stats: "21D0BACC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BAD0" },
			shield: { value: "11D0BAD2" },
			staff: { value: "11D0BAD4" },
		},
	},
	{
		level: 68,
		stats: "21D0BADC",
		abilities: {
			sword: { value: "11D0BAE0" },
			shield: { value: "11D0BAE2" },
			staff: { value: "11D0BAE4" },
		},
	},
	{
		level: 69,
		stats: "21D0BAEC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BAF0" },
			shield: { value: "11D0BAF2" },
			staff: { value: "11D0BAF4" },
		},
	},
	{
		level: 70,
		stats: "21D0BAFC",
		abilities: {
			sword: { value: "11D0BB00" },
			shield: { value: "11D0BB02" },
			staff: { value: "11D0BB04" },
		},
	},
	{
		level: 71,
		stats: "21D0BB0C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BB10" },
			shield: { value: "11D0BB12" },
			staff: { value: "11D0BB14" },
		},
	},
	{
		level: 72,
		stats: "21D0BB1C",
		abilities: {
			sword: { value: "11D0BB20" },
			shield: { value: "11D0BB22" },
			staff: { value: "11D0BB24" },
		},
	},
	{
		level: 73,
		stats: "21D0BB2C",
		abilities: {
			sword: {
				value: "11D0BB30",
				reward: Rewards.JACKPOT,
			},
			shield: {
				value: "11D0BB32",
				reward: Rewards.NEGATIVE_COMBO,
			},
			staff: {
				value: "11D0BB34",
				reward: Rewards.AIR_COMBO_BOOST,
			},
		},
	},
	{
		level: 74,
		stats: "21D0BB3C",
		abilities: {
			sword: { value: "11D0BB40" },
			shield: { value: "11D0BB42" },
			staff: { value: "11D0BB44" },
		},
	},
	{
		level: 75,
		stats: "21D0BB4C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BB50" },
			shield: { value: "11D0BB52" },
			staff: { value: "11D0BB54" },
		},
	},
	{
		level: 76,
		stats: "21D0BB5C",
		abilities: {
			sword: { value: "11D0BB60" },
			shield: { value: "11D0BB62" },
			staff: { value: "11D0BB64" },
		},
	},
	{
		level: 77,
		stats: "21D0BB6C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BB70" },
			shield: { value: "11D0BB72" },
			staff: { value: "11D0BB74" },
		},
	},
	{
		level: 78,
		stats: "21D0BB7C",
		abilities: {
			sword: { value: "11D0BB80" },
			shield: { value: "11D0BB82" },
			staff: { value: "11D0BB84" },
		},
	},
	{
		level: 79,
		stats: "21D0BB8C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BB90" },
			shield: { value: "11D0BB92" },
			staff: { value: "11D0BB94" },
		},
	},
	{
		level: 80,
		stats: "21D0BB9C",
		abilities: {
			sword: { value: "11D0BBA0" },
			shield: { value: "11D0BBA2" },
			staff: { value: "11D0BBA4" },
		},
	},
	{
		level: 81,
		stats: "21D0BBAC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BBB0" },
			shield: { value: "11D0BBB2" },
			staff: { value: "11D0BBB4" },
		},
	},
	{
		level: 82,
		stats: "21D0BBBC",
		abilities: {
			sword: { value: "11D0BBC0" },
			shield: { value: "11D0BBC2" },
			staff: { value: "11D0BBC4" },
		},
	},
	{
		level: 83,
		stats: "21D0BBCC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BBD0" },
			shield: { value: "11D0BBD2" },
			staff: { value: "11D0BBD4" },
		},
	},
	{
		level: 84,
		stats: "21D0BBDC",
		abilities: {
			sword: { value: "11D0BBE0" },
			shield: { value: "11D0BBE2" },
			staff: { value: "11D0BBE4" },
		},
	},
	{
		level: 85,
		stats: "21D0BBEC",
		abilities: {
			sword: {
				value: "11D0BBF0",
				reward: Rewards.SECOND_CHANCE,
			},
			shield: {
				value: "11D0BBF2",
				reward: Rewards.BERSERK_CHARGE,
			},
			staff: {
				value: "11D0BBF4",
				reward: Rewards.FINISHING_PLUS,
			},
		},
	},
	{
		level: 86,
		stats: "21D0BBFC",
		abilities: {
			sword: { value: "11D0BC00" },
			shield: { value: "11D0BC02" },
			staff: { value: "11D0BC04" },
		},
	},
	{
		level: 87,
		stats: "21D0BC0C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BC10" },
			shield: { value: "11D0BC12" },
			staff: { value: "11D0BC14" },
		},
	},
	{
		level: 88,
		stats: "21D0BC1C",
		abilities: {
			sword: { value: "11D0BC20" },
			shield: { value: "11D0BC22" },
			staff: { value: "11D0BC24" },
		},
	},
	{
		level: 89,
		stats: "21D0BC2C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BC30" },
			shield: { value: "11D0BC32" },
			staff: { value: "11D0BC34" },
		},
	},
	{
		level: 90,
		stats: "21D0BC3C",
		abilities: {
			sword: { value: "11D0BC40" },
			shield: { value: "11D0BC42" },
			staff: { value: "11D0BC44" },
		},
	},
	{
		level: 91,
		stats: "21D0BC4C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BC50" },
			shield: { value: "11D0BC52" },
			staff: { value: "11D0BC54" },
		},
	},
	{
		level: 92,
		stats: "21D0BC5C",
		abilities: {
			sword: { value: "11D0BC60" },
			shield: { value: "11D0BC62" },
			staff: { value: "11D0BC64" },
		},
	},
	{
		level: 93,
		stats: "21D0BC6C",
		abilities: {
			sword: { value: "11D0BC70" },
			shield: { value: "11D0BC72" },
			staff: { value: "11D0BC74" },
		},
	},
	{
		level: 94,
		stats: "21D0BC7C",
		abilities: {
			sword: { value: "11D0BC80" },
			shield: { value: "11D0BC82" },
			staff: { value: "11D0BC84" },
		},
	},
	{
		level: 95,
		stats: "21D0BC8C",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BC90" },
			shield: { value: "11D0BC92" },
			staff: { value: "11D0BC94" },
		},
	},
	{
		level: 96,
		stats: "21D0BC9C",
		abilities: {
			sword: { value: "11D0BCA0" },
			shield: { value: "11D0BCA2" },
			staff: { value: "11D0BCA4" },
		},
	},
	{
		level: 97,
		stats: "21D0BCAC",
		doubleIncrease: true,
		abilities: {
			sword: { value: "11D0BCB0" },
			shield: { value: "11D0BCB2" },
			staff: { value: "11D0BCB4" },
		},
	},
	{
		level: 98,
		stats: "21D0BCBC",
		abilities: {
			sword: { value: "11D0BCC0" },
			shield: { value: "11D0BCC2" },
			staff: { value: "11D0BCC4" },
		},
	},
	{
		level: 99,
		stats: "21D0BCCC",
		abilities: {
			sword: {
				value: "11D0BCD0",
				reward: Rewards.DAMAGE_CONTROL,
			},
			shield: {
				value: "11D0BCD2",
				reward: Rewards.THUNDER_BOOST,
			},
			staff: {
				value: "11D0BCD4",
				reward: Rewards.DRIVE_CONVERTER,
			},
		},
	},
];

export const abilityLevels: Level[] = levels.filter(
	level =>
		level.abilities.sword.reward &&
		level.abilities.staff.reward &&
		level.abilities.shield.reward
);

export const level50levels = [
	2,
	4,
	7,
	9,
	10,
	12,
	14,
	15,
	17,
	20,
	23,
	25,
	28,
	30,
	32,
	34,
	36,
	39,
	41,
	44,
	46,
	48,
	50,
];

export const level50delete = [31, 33, 47, 49, 53, 59, 65, 73, 85, 99];
