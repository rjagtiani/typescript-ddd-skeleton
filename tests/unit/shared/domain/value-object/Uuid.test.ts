import { Uuid } from "../../../../../src/shared/domain/value-object/value-object/Uuid"
import { UuidMother } from "../../../../utils/UuidMother"

describe('Uuid', () => {
    it('constructs', () => {
        const value = UuidMother.random()
        const uuid = new Uuid(value)

        expect(uuid.value).toEqual(value)
    });
});