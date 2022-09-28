import { Dependencies } from '../../interfaces/Dependencies';

import { createDynamoDbRepository } from '../repositories/DynamoDbRepository';
import { createNewLocalRepository } from '../repositories/LocalRepository';

/**
 * @description Utility that returns a complete dependencies object
 * based on implementations either "real" infrastructure or mocked ones.
 */
export function setupDependencies(localUse = false): Dependencies {
  const repository = localUse ? createNewLocalRepository() : createDynamoDbRepository();

  return {
    repository
  };
}
