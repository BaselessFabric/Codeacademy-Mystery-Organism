// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (number, bases) => {
    return {
        specimenNum: number,
        dna: bases,
        mutate() {
            randLoc = Math.floor(Math.random() * 14);
            currentDNA = this.dna[randLoc];
            newDNA = returnRandBase();

            //Checks to see if the new DNA letter is different from the current one, if not, re-roll
            while (currentDNA === newDNA) {
                newDNA = returnRandBase();
            }

            this.dna.splice(randLoc, 1, newDNA);

            //Return the current object's new DNA
            return this.dna;
        },
        compareDNA(otherPAqeour) {
            let currentDNA = this.dna;
            let otherDNA = otherPAqeour.dna;
            let dnaCounter = 0;

            for (let i = 0; i < currentDNA.length; i++) {
                if (currentDNA[i] === otherDNA[i]) {
                    dnaCounter++;
                }
            }

            let identicalDNAPercentage = (dnaCounter / 15) * 100;

            console.log(
                `Specimen ${this.specimenNum} and ${otherPAqeour.specimenNum} have ${identicalDNAPercentage}% DNA in common`
            );
        },
        willLikelySurvive() {
            currentDNA = this.dna;
            let cAndGCounter = 0;

            for (let i = 0; i < currentDNA.length; i++) {
                if (currentDNA[i] === "C" || currentDNA[i] === "G") {
                    cAndGCounter++;
                }
            }

            if (cAndGCounter >= 9) {
                return true;
            }

            return false;
        },
    };
};

/* 
let first = pAequorFactory(1, mockUpStrand());
let second = pAequorFactory(2, mockUpStrand());

console.log(first);
console.log(second);

first.compareDNA(second);

first.willLikelySurvive();
*/

//Create 30 instances of object and store inb array

let specimentArray = [];

for (let i = 0; i < 30; i++) {
    let specimen = pAequorFactory(i, mockUpStrand());
    specimentArray.push(specimen);
}

console.log(specimentArray);
