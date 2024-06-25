import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ComplexHealthIndicators } from "./complex-health-indicators.model";
import { HealthIndicator } from "src/health-indicators/models/health-indicator.model";
import { GenderEnum } from "src/users/users.const";

interface ComplexCreationAttrs {
    title: string;
    indicators?: string[];
}
@Table({tableName: 'complexes', createdAt: false, updatedAt: false})
export class Complex extends Model<Complex, ComplexCreationAttrs>{

    @ApiProperty({ example: '03b36516-f4b2-11ed-a05b-0242ac120003', description: 'Уникальный ключ UUID' })
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    readonly id: string;

    @ApiProperty({example: 'ГТО 10 Жен', description: 'Название комплекса'})
    @Column({type: DataType.STRING, allowNull: false})
    readonly title: string;
    
    @ApiProperty({example: 10, description: 'Ступень'})
    @Column({type: DataType.INTEGER, allowNull: false})
    readonly stage: number;

    @ApiProperty({example: GenderEnum.MALE, description: 'Пол'})
    @Column({type: DataType.STRING})
    readonly gender: string;

    @ApiProperty({type: [HealthIndicator], description: 'Список показателей, прикрепленных к данному комплексу'})
    @BelongsToMany(() => HealthIndicator, () => ComplexHealthIndicators)
     indicators?: Array<HealthIndicator & {SurveyHealthIndicators: ComplexHealthIndicators}>;

}