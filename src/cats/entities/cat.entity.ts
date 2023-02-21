import { MaybeEntity } from '../../utils/models/entities/classes/Maybe.entity';

export class CatEntity {
	constructor(
		id: string,
		name: string,
		age: number,
		lastVaccinationTimestamp: MaybeEntity<number>
	) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.lastVaccinationTimestamp = lastVaccinationTimestamp;
	}

	/**
	 * The id of the cat
	 */
	public id: string;

	/**
	 * The name of the cat
	 */
	public name: string;

	/**
	 * The age of the cat
	 */
	public age: number;

	/**
	 * The lastVaccinationTimestamp of the cat
	 */
	public lastVaccinationTimestamp: MaybeEntity<number>;
}
