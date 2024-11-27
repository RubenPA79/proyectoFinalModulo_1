export class Professional {
    constructor(
        public name: string,
        public age: number,
        public weight: number,
        public height: number,
        public isRetired: boolean,
        public nationality: string,
        public oscarNumbers: number,
        public profession: string
    ) {}

    public printAttributes(): void {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Weight: ${this.weight}
        Height: ${this.height}
        Is Retired: ${this.isRetired}
        Nationality: ${this.nationality}
        Oscar Numbers: ${this.oscarNumbers}
        Profession: ${this.profession}
        `);
    }
}
