class Neighbourhood {
    constructor() {
        this.crime = 75;
        this.crimeRate = 1.3;

        this.sat = 75;
        this.satRate = this.calcSatRate();
    }

    calcSatRate() {
        return 1 - (this.crimeRate - 1) / 3;
    }
}