import { Model } from 'sequelize-typescript';
declare class MigrationManager extends Model {
    pk_migration_manager: number;
    data_version: number;
}
export default MigrationManager;
