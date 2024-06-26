import { TableRow } from '@keira/shared/constants';

export const NPC_TEXT_TABLE = 'npc_text';
export const NPC_TEXT_ID = 'ID';
export const NPC_TEXT_SEARCH_FIELDS = [
  NPC_TEXT_ID,
  'text0_0',
  'text0_1',
  'text1_0',
  'text1_1',
  'text2_0',
  'text2_1',
  'text3_0',
  'text3_1',
  'text4_0',
  'text4_1',
  'text5_0',
  'text5_1',
  'text6_0',
  'text6_1',
  'text7_0',
  'text7_1',
];

export const NPC_TEXT_CUSTOM_STARTING_ID = 90_000_000;

export class NpcText extends TableRow {
  ID: number = 0;
  text0_0: string = '';
  text0_1: string = '';
  BroadcastTextID0: number = 0;
  lang0: number = 0;
  Probability0: number = 0;
  em0_0: number = 0;
  em0_1: number = 0;
  em0_2: number = 0;
  em0_3: number = 0;
  em0_4: number = 0;
  em0_5: number = 0;
  text1_0: string = '';
  text1_1: string = '';
  BroadcastTextID1: number = 0;
  lang1: number = 0;
  Probability1: number = 0;
  em1_0: number = 0;
  em1_1: number = 0;
  em1_2: number = 0;
  em1_3: number = 0;
  em1_4: number = 0;
  em1_5: number = 0;
  text2_0: string = '';
  text2_1: string = '';
  BroadcastTextID2: number = 0;
  lang2: number = 0;
  Probability2: number = 0;
  em2_0: number = 0;
  em2_1: number = 0;
  em2_2: number = 0;
  em2_3: number = 0;
  em2_4: number = 0;
  em2_5: number = 0;
  text3_0: string = '';
  text3_1: string = '';
  BroadcastTextID3: number = 0;
  lang3: number = 0;
  Probability3: number = 0;
  em3_0: number = 0;
  em3_1: number = 0;
  em3_2: number = 0;
  em3_3: number = 0;
  em3_4: number = 0;
  em3_5: number = 0;
  text4_0: string = '';
  text4_1: string = '';
  BroadcastTextID4: number = 0;
  lang4: number = 0;
  Probability4: number = 0;
  em4_0: number = 0;
  em4_1: number = 0;
  em4_2: number = 0;
  em4_3: number = 0;
  em4_4: number = 0;
  em4_5: number = 0;
  text5_0: string = '';
  text5_1: string = '';
  BroadcastTextID5: number = 0;
  lang5: number = 0;
  Probability5: number = 0;
  em5_0: number = 0;
  em5_1: number = 0;
  em5_2: number = 0;
  em5_3: number = 0;
  em5_4: number = 0;
  em5_5: number = 0;
  text6_0: string = '';
  text6_1: string = '';
  BroadcastTextID6: number = 0;
  lang6: number = 0;
  Probability6: number = 0;
  em6_0: number = 0;
  em6_1: number = 0;
  em6_2: number = 0;
  em6_3: number = 0;
  em6_4: number = 0;
  em6_5: number = 0;
  text7_0: string = '';
  text7_1: string = '';
  BroadcastTextID7: number = 0;
  lang7: number = 0;
  Probability7: number = 0;
  em7_0: number = 0;
  em7_1: number = 0;
  em7_2: number = 0;
  em7_3: number = 0;
  em7_4: number = 0;
  em7_5: number = 0;
  VerifiedBuild: number = 0;
}
