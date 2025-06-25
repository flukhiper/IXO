import { Types } from 'mongoose';
import { initMongo } from './libs/mongodb';
import { GameSystem } from './models/config/GameSystem';
import { GameSystemService } from './services/config/GameSystemService';
import { createActionConfig } from './utils/config/action/creator';
import { createActionCost, createActionHitRoll, createActionLevelConfig, createActionTargetWithRange } from './utils/config/action/helper';

const main = async () => {

  const uri = 'mongodb+srv://local:D0seRDdyz7bhUzRG@cluster0.xvqjnup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  await initMongo(uri);

  const gameSystem = new GameSystem('Test Naja');
  const gsService = new GameSystemService();

  // 1. Create some ActionConfigs using your creator/helpers
  const attack = createActionConfig({
    name: 'Attack',
    nameTh: 'โจมตี',
    description: 'A basic melee attack.',
    descriptionTh: 'การโจมตีระยะประชิดพื้นฐาน',
    type: 'attack',
    level: {
      1: createActionLevelConfig({
        costs: [
          createActionCost(
            'action-point',
            1
          )
        ],
        target: createActionTargetWithRange('single', 1),
        hit: createActionHitRoll({
          value: '1d10'
        })
      // Optionally add damage, condition, etc.
      })
    },
    requirements: []
  });
  gameSystem.actionManager.add(attack);

  console.log('First');
  console.log(gameSystem.actionManager.list());

  // 2. Save to DB
  await gsService.save(gameSystem, new Types.ObjectId().toHexString());

  // 3. Clear in-memory
  gameSystem.actionManager.clear();

  console.log('Clear');
  console.log(gameSystem.actionManager.list());

  // 4. Load from DB
  await gsService.load(gameSystem);

  // 5. Use loaded actions
  console.log('Finally');
  console.log(gameSystem.actionManager.list());

};

main();
